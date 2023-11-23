FROM node:18-alpine

COPY ./build/ /build/
COPY package*.json /build/

WORKDIR /build

RUN npm install -g npm
RUN npm ci --omit-dev

ENV PORT=80
CMD [ "node", "." ]
