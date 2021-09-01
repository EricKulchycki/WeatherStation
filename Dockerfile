FROM ubuntu:latest

RUN mkdir ~/.ssh
COPY . /WeatherStation
COPY ~/.ssh/. ~/.ssh

WORKDIR /WeatherStation/webserver/scripts

RUN chmod +x ./copy_files_to_pi.sh

RUN apt update -y
RUN apt install rsync -y
RUN apt install ssh
RUN systemctl ssh start
RUN systemctl ssh enable



ENV PROJECT_PATH=/WeatherStation/
ENV TARGET_HOST=weather@rasberrypi.local

ENTRYPOINT ["./copy_files_to_pi.sh"]
