#!/bin/bash
#echo pull last version from master
#git pull
cd /home/bitnami/oostaoo
npm install
npm run build
cp -R /home/bitnami/oostaoo/build/ /home/bitnami/oostaoo/public/