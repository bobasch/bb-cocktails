# pull official base image
FROM node:16.16.0-alpine

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
# -g is the GID
RUN addgroup -g 1009 app
# -u is the UID
# -D permits to create an user without password
RUN adduser -u 1009 -G app -h /home/app -D app

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/code
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# set environment variables
ENV NODE_ENV 'production'

# install system dependencies
RUN apk update \
  && apk add npm


# install node dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm i --include=dev

# add app
COPY . .

# build
RUN npm run build

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

# run node
CMD node dist/app.js
