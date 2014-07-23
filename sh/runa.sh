#!/bin/bash

# execute me from the root folder, not sh/

set -e

./sh/build.sh

cd phonegap/

phonegap run android

exit
#EOF
