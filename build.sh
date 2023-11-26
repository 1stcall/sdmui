#!/usr/bin/env bash

set -e

npm run build
cp ./package*.json ./build/
cp ./Dockerfile ./build/
cp ./compose.yaml ./build/
