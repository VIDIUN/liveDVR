#docker build -t vidiun/livecontroller:1.26 .
#docker run -d -v /myconfig/:/myconfig/ -v /var/log/liveController/:/var/log/liveController/ --network=host vidiun/livecontroller:1.26 ubuntudrm
#docker exec -it

ARG NODE_VERSION=11.9.0
FROM node:$NODE_VERSION AS build

#RUN apk add --update build-base curl nasm tar bzip2 zlib-dev yasm-dev

RUN apt-get update && apt-get install -y nasm

WORKDIR /opt/vidiun/liveController/
COPY package*.json ./
RUN npm install


COPY ./build_scripts/ ./build_scripts/
COPY ./node_addons/ ./node_addons/
RUN ./build_scripts/build_ffmpeg.sh /tmp/ 3.0
RUN ./build_scripts/build_addon.sh /opt/vidiun/liveController/ /tmp/ffmpeg-3.0/

COPY ./ ./

RUN rm -rf ./build

FROM node:$NODE_VERSION-slim


WORKDIR /opt/vidiun/liveController/

COPY --from=build /opt/vidiun/liveController/ ./

VOLUME /var/log/liveController/
#content folder
VOLUME /web/content/vLive


COPY ./deployment/docker/initScript.sh .
COPY ./deployment/docker/liveController/entryPoint.sh .

ENTRYPOINT ["./entryPoint.sh"]