FROM node:alpine

ADD project /home/node/app/

WORKDIR /home/node/app

RUN npm install

CMD ["node", "ws_server.js"]

EXPOSE 3000