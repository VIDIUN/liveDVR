#docker build -t  vidiun/live-recorder -f ./deployment/docker/liveRecorder/Dockerfile .
#docker run   -d vidiun/live-recorder
#docker exec -it `docker ps | grep recorder | awk '{print $1}' `  bash



FROM python:2.7.14-stretch AS builder

RUN  apt-get update \
  && apt-get install -y wget curl nasm  build-essential zlib1g-dev


WORKDIR /opt/vidiun/workspace/

COPY ./build_scripts/ ./build_scripts/
RUN ./build_scripts/build_ffmpeg.sh /tmp/ 3.0


COPY ./liveRecorder/ ./liveRecorder/


RUN ./build_scripts/build_ts2mp4_convertor.sh /opt/vidiun/workspace/liveRecorder/ /tmp/ffmpeg-3.0/

RUN pip install schedule m3u8 poster psutil Crypto


FROM python:2.7.14-slim-stretch


WORKDIR /opt/vidiun/liveRecorder/

VOLUME /web/content/vLive

#copy PIP packages
COPY --from=builder /usr/local/lib/python2.7/site-packages /usr/local/lib/python2.7/site-packages
COPY --from=builder /opt/vidiun/workspace/liveRecorder .

COPY ./deployment/docker/initScript.sh .
COPY ./deployment/docker/liveRecorder/entryPoint.sh .


ENTRYPOINT ["./entryPoint.sh"]