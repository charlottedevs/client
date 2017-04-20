#

FROM node:7.7

ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN npm install

COPY . $APP_HOME
