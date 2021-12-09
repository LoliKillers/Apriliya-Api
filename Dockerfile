FROM debian

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm install --global nodemon

WORKDIR /app
COPY . /app
RUN npm install
CMD ["nodemon", "index"]
