#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

cargo build --release --target=${TARGET_ARCH}

rsync -a ${SOURCE_PATH} ${TARGET_HOST}:${TARGET_PATH}
ssh -t ${TARGET_HOST} ${BINARY_FILE}