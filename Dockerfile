FROM node:16-alpine

RUN mkdir /reprezent-me

WORKDIR /reprezent-me

COPY package.json /reprezent-me/

RUN npm install

COPY . /reprezent-me/

RUN npm run build

CMD [ "npm", "start" ]