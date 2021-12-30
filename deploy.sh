#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

scp -a ${SOURCE_PATH} ${TARGET_HOST}:${TARGET_PATH}
scp -a ${SOURCE_PATH}/systemd/ ${TARGET_HOST}:/etc/systemd/system/

ssh -t ${TARGET_HOST} systemctl start sensor && systemctl enable sensor
ssh -t ${TARGET_HOST} systemctl start app && systemctl enable app