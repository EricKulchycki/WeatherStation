#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

scp -r ${PROJECT_PATH}/WeatherStation/systemd ${TARGET_HOST}:~/WeatherStation

ssh -t ${TARGET_HOST} sudo cp "~/WeatherStation/systemd/app.service" "/etc/systemd/system/app.service"
ssh -t ${TARGET_HOST} sudo cp "~/WeatherStation/systemd/sensor.service" "/etc/systemd/system/sensor.service"
ssh -t ${TARGET_HOST} sudo cp "~/WeatherStation/systemd/portal.service" "/etc/systemd/system/portal.service"

ssh -t ${TARGET_HOST} "sudo systemctl start sensor && sudo systemctl enable sensor"
ssh -t ${TARGET_HOST} "sudo systemctl start app && sudo systemctl enable app"
ssh -t ${TARGET_HOST} "sudo systemctl start portal && sudo systemctl enable portal"