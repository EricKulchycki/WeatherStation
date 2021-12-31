#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

echo ${PROJECT_PATH}

# Add some flags to deploy only src/nodemodules/scripts/updated packages

scp -r ${PROJECT_PATH}/WeatherStation/webserver/src ${TARGET_HOST}:/home/pi/WeatherStation/webserver