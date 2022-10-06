FROM node:16.10.0

COPY ./ /src

WORKDIR /src

RUN yarn

RUN yarn build:production

CMD ["node", "server.js"]
