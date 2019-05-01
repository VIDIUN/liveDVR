from VidiunClient import *
from VidiunClient.Plugins.Core import VidiunSessionType, VidiunUploadToken, VidiunUploadedFileTokenResource, \
    VidiunUploadTokenFilter, VidiunServerFileResource, VidiunUploadTokenStatus
from Config.config import get_config
from Logger.LoggerDecorator import logger_decorator
from threading import Lock
import time
import json


class BackendClient:

    admin_secret = get_config('admin_secret')
    partner_id = get_config('partner_id')
    url = get_config('api_service_url')
    session_duration = get_config('session_duration')
    mode = get_config('mode')
    vs_privileges = get_config('vs_privileges')
    if vs_privileges is None:
        vs_privileges = ''

    format = 2
    request_timeout = 120
    expiration_time_vs = -1
    mutex = Lock()
    config = VidiunConfiguration(url)
    client = VidiunClient(config)
    client.setPartnerId(partner_id)
    client.setClientTag("liveRecorder:1.0.0")
    vs = None
    type = VidiunSessionType.ADMIN

    def __init__(self, session_id):
        self.logger = logger_decorator(self.__class__.__name__, session_id)
        self.logger.info("Init BackendClient: admin_secret XXX, partner_id %s, session_duration %s, url %s",
                         self.partner_id, self.session_duration, self.url)

    def create_new_session(self):
        vs= self.client.generateSessionV2(self.admin_secret, None, self.type, self.partner_id, int(self.session_duration), self.vs_privileges)
        #result = self.client.session.start(self.admin_secret, None, self.type, self.partner_id, None, None)
        BackendClient.vs = vs
        BackendClient.expiration_time_vs = int(self.session_duration) + int(time.time()) - 3600  # confidence interval
        self.client.setVs(self.vs)
        self.logger.info("Creating a new session, VS= %s ", self.vs)

    def get_vidiun_session(self):
        self.mutex.acquire()
        try:
            if (self.vs is None) or self.expiration_time_vs < int(time.time()):
                self.create_new_session()
        finally:
            self.mutex.release()

    def impersonate_client(self, partner_id):
        global vs
        self.get_vidiun_session()  # generate VS in case that not existed or expired
        clone_client = VidiunClient(self.config)
        clone_client.setPartnerId(partner_id)
        clone_client.setVs(self.vs)
        return clone_client

    def handle_request(self, partner_id, service, action, *parameters):

        client = self.impersonate_client(partner_id)
        service_attribute = getattr(client, service)
        action_attribute = getattr(service_attribute, action)
        self.logger.debug("[%s][%s] About to call", service, action)
        (result, header) = action_attribute(*parameters)
        self.logger.debug("[%s][%s] API result's header : %s  ", service, action, header)
        return result

    def cancel_replace(self, partner_id, entry_id):
        return self.handle_request(partner_id, 'media', 'cancelReplace', entry_id)

    def get_recorded_entry(self, partner_id, entry_id):
        return self.handle_request(partner_id, 'media', 'get', entry_id)

    def get_live_entry(self, entry_id):
        self.get_vidiun_session()  # generate VS in case that not existed or expired
        result = self.client.liveStream.get(entry_id)
        self.logger.info("Header :%s ", result[1])
        return result[0]

    def upload_token_add(self, partner_id, file_name, file_size):

        upload_token_obj = VidiunUploadToken()
        upload_token_obj.fileName = file_name
        upload_token_obj.fileSize = file_size

        result = self.handle_request(partner_id, 'uploadToken', 'add', upload_token_obj)
        self.logger.info("Token id : [%s], file name: [%s], partnerId: [%s]", result.id, file_name, partner_id)
        return result.id

    def upload_token_list(self, partner_id, file_name):

        upload_token_filter = VidiunUploadTokenFilter()
        upload_token_filter.fileNameEqual = file_name
        upload_token_filter.statusIn = ''.join([str(VidiunUploadTokenStatus.PENDING), ',',
                                                str(VidiunUploadTokenStatus.PARTIAL_UPLOAD), ',' ,
                                                str(VidiunUploadTokenStatus.FULL_UPLOAD)])
        return self.handle_request(partner_id, 'uploadToken', 'list', upload_token_filter)

    def upload_token_upload(self, upload_chunk_obj):

        token = upload_chunk_obj.upload_session.token_id
        file_name = upload_chunk_obj.upload_session.file_name
        chunks_to_upload = upload_chunk_obj.upload_session.chunks_to_upload
        sequence_number = upload_chunk_obj.chunk_index
        resume = upload_chunk_obj.resume
        final_chunk = upload_chunk_obj.final_chunk
        resume_at = upload_chunk_obj.resume_at
        self.logger.info("About to upload chunk [%s] from [%s] in file [%s] token:[%s], resume:[%s], "
                         "final_chunk [%s], resume_at: [%s]", sequence_number, chunks_to_upload, file_name, token,
                         resume, final_chunk, resume_at)

        result = self.handle_request(upload_chunk_obj.upload_session.partner_id, 'uploadToken', 'upload', token,
                                     upload_chunk_obj.file_obj, resume, final_chunk, resume_at)

        self.logger.info("Finish to upload, result: %s", self.upload_token_result_to_json(result))
        return result

    @staticmethod
    def upload_token_result_to_json(result):  # wrapped by try catch in order to prevent upload token to be failed.
        result_dictionary = {
            "fileName": result.fileName,
            "fileSize": result.fileSize,
            "token": result.id,
            "partnerId": result.partnerId,
            "status": result.status.value,
            "uploadFileSize": result.uploadedFileSize
        }
        return json.dumps(result_dictionary, ensure_ascii=False)

    def set_recorded_content(self, entry_id, resource, duration, partner_id, recorded_id, flavor_id):

        self.logger.info("set_recorded_content entry_id  [%s], resource [%s] duration [%s] recorded_id [%s] flavor_id [%s]", entry_id,
                         resource.__class__.__name__, duration, recorded_id, flavor_id)
        self.handle_request(partner_id, 'liveStream', 'setRecordedContent', entry_id, 0, resource, duration, recorded_id, flavor_id)

    def set_recorded_content_remote(self, upload_session, duration, flavor_id):
        token_id = upload_session.token_id
        recorded_id = upload_session.recorded_id
        entry_id = upload_session.entry_id
        partner_id = upload_session.partner_id
        resource = VidiunUploadedFileTokenResource(token_id)
        self.logger.info("set_recorded_content_remote partner_id [%s] token [%s] duration [%s] recorded_id [%s] flavor_id [%s]", partner_id, token_id,
                         duration, recorded_id, flavor_id)
        self.set_recorded_content(entry_id, resource, duration, partner_id, recorded_id, flavor_id)

    def set_recorded_content_local(self, partner_id, entry_id, output_file, duration, recorded_id, flavor_id):  # todo check it
        self.logger.info("set_recorded_content_local partner_id [%s] output_file [%s] duration [%s] recorded_id [%s] flavor_id [%s]", partner_id,
                         output_file, duration, recorded_id, flavor_id)
        resource = VidiunServerFileResource()
        resource.localFilePath = output_file
        resource.keepOriginalFile = False
        self.set_recorded_content(entry_id, resource, duration, partner_id, recorded_id, flavor_id)

    def update_task_entryServerNode_status(self, entry_server_node_id, new_status):
        return self.handle_request(self.partner_id, 'entryServerNode', 'updateStatus', entry_server_node_id, new_status)



