FROM node:16.10.0

ENV TZ=America/Sao_Paulo

RUN apt-get update && apt-get install -y \
    apt-utils \
    ffmpeg \
    libopus-dev \
    libaio1

COPY ./ /src

# colocar em variavel de ambiente
WORKDIR /src

RUN yarn
RUN yarn build

CMD [ "node", ".dist/index.js" ]
