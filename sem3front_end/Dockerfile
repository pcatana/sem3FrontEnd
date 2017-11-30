FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json package.json
RUN npm install

COPY . .

RUN npm run build --production

RUN npm install -g serve

CMD serve -s build

EXPOSE 5000