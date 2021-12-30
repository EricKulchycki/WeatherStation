#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

echo ${PROJECT_PATH}

scp -r ${PROJECT_PATH}/WeatherStation/webserver ${TARGET_HOST}:/home/pi/WeatherStation