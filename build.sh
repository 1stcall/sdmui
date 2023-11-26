#!/usr/bin/env bash

docker stop sdmui --time 0
docker system prune --all --force

npm run build
cp ./package*.json ./build/
cp ./Dockerfile ./build/
cp ./compose.yaml ./build/

#docker build . -t sdmui
#docker run --detach --publish 80:80 --name sdmui -t sdmui
#sleep 2
#docker logs sdmui 
