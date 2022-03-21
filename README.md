# userlist-react

Project to build redux react app using typescript
This is a fullstack application using reactjs nodejs and mongo Db.
Building teh application using Docker

# Server

node express app to build the backend api connecting to mongodb
cd server \

# Mongodb

docker network create app-net \
docker volume create dbdata \
docker volume create dbconfig \
docker run --name db -p 27017:27017 -v dbdata:/data/db -v dbconfig:/data/configdb --network app-net -d mongo

# node

docker build -t node/api . \
docker run --name node -p 8080:8080 --network app-net node/api

# web

frontend react application
build docker -t builder .
