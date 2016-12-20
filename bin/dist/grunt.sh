#!/usr/bin/env bash

docker build -t grunt -f docker/grunt/Dockerfile .

docker run \
  --name "approximate-grunt" \
  --rm \
  -v "$PWD":/app \
  -w /app \
  grunt $*
