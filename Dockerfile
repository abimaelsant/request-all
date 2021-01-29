FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN sudo npm install typeorm -g

COPY . .

EXPOSE 3337

CMD [ "npm", "start" ]
