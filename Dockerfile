FROM node:lts-buster

RUN apt-get update && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
RUN npm install nodemon -g

ENV PORT=8080
WORKDIR ./app
COPY . /app
COPY package.json .
RUN npm install
ENTRYPOINT ["nodemon","index.js"]
