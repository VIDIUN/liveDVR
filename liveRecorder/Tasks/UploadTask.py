import os
import io
from BackendClient import *
from Config.config import get_config
from TaskBase import TaskBase
from ThreadWorkers import ThreadWorkers
from VidiunUploadSession import VidiunUploadSession
from VidiunClient.Plugins.Core import  VidiunEntryReplacementStatus
from VidiunClient.Base import VidiunException
import glob
import re


class UploadTask(TaskBase):
    # Global scope
    #global backend_client

    upload_token_buffer_size = get_config('upload_token_buffer_size_mb', 'int') * 1000000  # buffer is in MB

    def __init__(self, param, logger_info):
        TaskBase.__init__(self, param, logger_info)
        session_id = self.entry_id + '-' + self.recorded_id
        self.backend_client = BackendClient(session_id)
        mp4_filename_pattern = param['directory'] + '_f*_out.mp4'
        self.mp4_files_list = glob.glob1(self.recording_path, mp4_filename_pattern)
        self.mp4_filename_pattern = "[0,1]_.+_[0,1]_.+_\d+(.\d+)?_f(?P<flavor_id>\d+)_out[.]mp4"


    def get_chunks_to_upload(self, file_size):
        if file_size % self.upload_token_buffer_size == 0:
            return int(file_size / self.upload_token_buffer_size)

        return int(file_size / self.upload_token_buffer_size) + 1

    def upload_file(self, file_name, flavor_id, is_first_flavor):

        threadWorkers = ThreadWorkers()
        file_size = os.path.getsize(file_name)
        chunks_to_upload = self.get_chunks_to_upload(file_size)
        with io.open(file_name, 'rb') as infile:

            upload_session = VidiunUploadSession(file_name, file_size, chunks_to_upload, self.entry_id,
                                                  self.recorded_id, self.backend_client, self.logger, infile)
            if chunks_to_upload > 2:
                chunk = upload_session.get_next_chunk()
                if chunk is not None:
                    threadWorkers.add_job(chunk)
                    failed_jobs = threadWorkers.wait_jobs_done()
                    if len(failed_jobs) != 0:
                        raise Exception("Failed to upload first chunk")
                    self.logger.debug("Finish to upload first chunks")
            while upload_session.chunk_index <= chunks_to_upload-1:
                chunk = upload_session.get_next_chunk()
                if chunk is None:
                    break
                threadWorkers.add_job(chunk)

            failed_jobs = threadWorkers.wait_jobs_done()
            self.logger.info('Finish to upload [%s chunks], about to upload last chunk', chunks_to_upload-1)

            # last chunk
            chunk = upload_session.get_next_chunk(last_chunk = True)
            if chunk is not None:
                threadWorkers.add_job(chunk)
                job_result = threadWorkers.wait_jobs_done()
                failed_jobs.extend(job_result)
            self.check_stamp()

            upload_session_json = str(vars(upload_session))

            if len(failed_jobs) == 0:
                self.logger.info("successfully upload all chunks, call append recording")
                if is_first_flavor:
                    self.check_replacement_status(upload_session.partner_id)
                self.backend_client.set_recorded_content_remote(upload_session, str(float(self.duration)/1000), flavor_id)
                os.rename(file_name, file_name + '.done')
            else:
                raise Exception("Failed to upload file, "+str(len(failed_jobs))+" chunks from "+str(chunks_to_upload)+ " where failed:"
                                + upload_session_json)

    def check_replacement_status(self, partner_id):
        self.logger.debug("About to check replacement status for [%s]", self.recorded_id)
        recorded_obj = self.backend_client.get_recorded_entry(partner_id, self.recorded_id)
        self.logger.debug("Got replacement Status: %s", recorded_obj.replacementStatus.value)
        if recorded_obj.replacementStatus.value != VidiunEntryReplacementStatus.NONE:
            self.logger.info("entry %s has replacementStatus %s, calling cancel_replace", self.recorded_id,
                             recorded_obj.replacementStatus)
            self.backend_client.cancel_replace(partner_id, self.recorded_id)

    def append_recording_handler(self, file_full_path, flavor_id, is_first_flavor):
        partner_id = self.backend_client.get_live_entry(self.entry_id).partnerId
        if is_first_flavor:
            self.check_replacement_status(partner_id)
        self.backend_client.set_recorded_content_local(partner_id, self.entry_id, file_full_path,
                                                       str(float(self.duration)/1000), self.recorded_id, flavor_id)

    def run(self):
        try:
            mode = get_config('mode')
            is_first_flavor = True
            count_uploaded_mp4 = 0
            code = ''
            for mp4 in self.mp4_files_list:
                try:
                    result = re.search(self.mp4_filename_pattern, mp4)
                    if not result or not result.group('flavor_id'):
                        error = "Error running upload task, failed to parse flavor id from filename: [{0}]".format(mp4)
                        self.logger.error(error)
                        raise ValueError(error)
                    flavor_id = result.group('flavor_id')
                    file_full_path = os.path.join(self.recording_path, mp4)
                    if mode == 'remote':
                        self.upload_file(file_full_path, flavor_id, is_first_flavor)
                    if mode == 'local':
                        self.append_recording_handler(file_full_path, flavor_id, is_first_flavor)
                    is_first_flavor = False
                    count_uploaded_mp4 += 1
                except VidiunException as e:
                    code = e.code
                    if e.code == 'FLAVOR_PARAMS_ID_NOT_FOUND':
                        self.logger.warn('{}, failed to upload {}, flavor id {}'.format(e.message, mp4, flavor_id))
                    else:
                        raise e
            if count_uploaded_mp4 == 0:
                if len(self.mp4_files_list) > 0:
                    mp4_files = str(self.mp4_files_list)
                    err = Exception('failed to upload any of {} check log errors'.format(mp4_files))
                    err.code = code
                    raise err
                else:
                    self.logger.warn('there were no mp4 files to upload. check {}'.format(self.recording_path))
        except VidiunException as e:
            self.logger.error('failed to upload VOD with error {}, exception details: {}'.format(e.code, e.message))
            if e.code == 'VIDIUN_RECORDING_DISABLED':
                self.logger.warn("%s, move it to done directory", e.message)
            elif e.code == 'ENTRY_ID_NOT_FOUND':
                self.logger.warn("%s, move it to done directory", e.message)
            else:
                raise e


