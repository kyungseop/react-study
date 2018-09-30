#!/bin/bash
#http-server 실행
# npm install -g http-server  <= 사전 설치 필요

if [ -z $1 ];then
    echo "Usage: ./runServer.sh [index.html 경로]"
    echo "Usage: ./runServer.sh ch03/clock"
    exit 1;
fi

http-server $1