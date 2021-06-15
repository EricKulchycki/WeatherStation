#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

rsync -r -a /home/erickulchycki/Documents/WeatherStation/webserver ${TARGET_HOST}:~/
ssh -t ${TARGET_HOST} ./webserver/scripts/copy_src.sh