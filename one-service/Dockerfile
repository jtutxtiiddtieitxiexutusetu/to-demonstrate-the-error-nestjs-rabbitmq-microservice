# only for dev image. not used in other stages
FROM node:18.6-slim AS dev_image
RUN npm i -g @nestjs/cli@9.1.1
RUN echo "alias ll='ls -lah'" >> /home/node/.bashrc
RUN apt-get update && apt-get install -y procps
USER node
WORKDIR /app
CMD ["bash", "-c", "while true ; do sleep 10 ; done ;"]