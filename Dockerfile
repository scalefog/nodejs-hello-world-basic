FROM node:10-alpine

WORKDIR /opt/app

ENV PORT=80

COPY . . 
RUN npm install

CMD [ "npm", "start" ]

