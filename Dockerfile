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
RUN npm run db:create
RUN npm run build

CMD [ "node", "./dist/server.js" ]
