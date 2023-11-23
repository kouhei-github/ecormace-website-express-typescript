FROM node:20
WORKDIR /app
COPY ./express /app
COPY ./express/package.json /app
COPY ./express/yarn.lock /app
RUN yarn install
EXPOSE 8080
CMD [ "yarn", "start" ]
