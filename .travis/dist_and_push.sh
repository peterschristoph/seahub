#!/bin/bash
: ${PYTHON=python3}

set -e
if [[ ${TRAVIS} != "" ]]; then
    set -x
fi

set -x
SEAHUB_TESTSDIR=$(python -c "import os; print(os.path.dirname(os.path.realpath('$0')))")
SEAHUB_SRCDIR=$(dirname "${SEAHUB_TESTSDIR}")

export PYTHONPATH="/usr/local/lib/python3.7/site-packages:/usr/local/lib/python3.7/dist-packages:${SEAHUB_SRCDIR}/thirdpart:${PYTHONPATH}"
cd "$SEAHUB_SRCDIR"
set +x

function commit_dist_files() {
  git checkout -b dist-python3-7.0
  git add -u . && git add -A media/assets && git add -A static/scripts && git add -A frontend && git add -A locale
  git config --global user.email "drone@seafile.com"
  git config --global user.name "drone"
  git commit -m "[dist] Drone build: # v2"
}

function upload_files() {
    echo 'push dist to seahub'
    git remote add token-origin https://sniper-py:72674b61c2ff0670336e9c124eac39aebb511dba@github.com/haiwen/seahub.git
    git push -f token-origin dist-python3-7.0
}

function make_dist() {
    echo "Making dist files ..."
    make dist
}

function build_frontend() {
    echo "Building frontend/src files ..."
    cd ./frontend && npm install && CI=false npm run build && cd ..

}

build_frontend
make_dist
commit_dist_files
upload_files
