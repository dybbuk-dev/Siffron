FROM node:16.10.0

# set working directory
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

COPY ./ /src


WORKDIR /src
# install and cache app dependencies
RUN yarn

RUN yarn build:production

# start app
CMD ["node", "server.js"]
