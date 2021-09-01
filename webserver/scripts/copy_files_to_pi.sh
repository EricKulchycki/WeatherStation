#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

echo ${PROJECT_PATH}

rsync -r -a ${PROJECT_PATH}/WeatherStation/webserver ${TARGET_HOST}:/WeatherStation