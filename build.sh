#!/usr/bin/env bash

set -e

npm clean-install
npm run build
cp --verbose --archive ./package*.json ./build/
cp --verbose --archive ./Dockerfile ./build/
cp --verbose --archive ./compose.yaml ./build/
