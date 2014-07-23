#!/bin/bash

# build ember app and add it to phonegap app

set -e

ember build

cp -vR dist/assets/ phonegap/www/
cp -vR dist/img/* phonegap/www/img/

exit
#EOF
