#!/bin/bash
cd "$(dirname "$0")"
lastdir=`pwd`
tag=test

if [[ $@ == *'push'* ]]; then
    echo "ecs login"
    eval `aws ecr get-login --no-include-email --region eu-west-1`
fi

if [[ $@ == *'media-server'* ]] || [[ $@ == *'all'* ]] ; then
    echo "Build media-server"
    docker build -t  vidiun/media-server -f ../../../media-server/Dockerfile ../../../media-server/
    echo "tag media-server:$tag"
    docker tag vidiun/media-server 983882572364.dkr.ecr.eu-west-1.amazonaws.com/media-server:$tag
    if [[ $@ == *'push'* ]]; then
        echo "push media-server"
        docker push 983882572364.dkr.ecr.eu-west-1.amazonaws.com/media-server:$tag
    fi
fi

if [[ $@ == *'live-controller'* ]] || [[ $@ == *'all'* ]] ; then
    echo "Build live-controller"
    docker build -t  vidiun/live-controller -f ./liveController/Dockerfile ../../
    echo "tag live-controller:$tag"
    docker tag vidiun/live-controller 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-controller:$tag
    if [[ $@ == *'push'* ]]; then
        echo "push live-controller"
        docker push 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-controller:$tag
    fi
fi

if [[ $@ == *'live-packager'* ]] || [[ $@ == *'all'* ]] ; then
    echo "Build live-packager"
    docker build -t  vidiun/live-packager -f ./livePackager/Dockerfile ../../
    echo "tag live-packager:$tag"
    docker tag vidiun/live-packager 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-packager:$tag
    if [[ $@ == *'push'* ]]; then
        echo "push live-packager"
        docker push 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-packager:$tag
    fi
fi

if [[ $@ == *'live-recorder'* ]] || [[ $@ == *'all'* ]] ; then
    echo "Build live-recorder"
    docker build -t  vidiun/live-recorder -f ./liveRecorder/Dockerfile ../../
    echo "tag live-recorder:$tag"
    docker tag vidiun/live-recorder 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-recorder:$tag
    if [[ $@ == *'push'* ]]; then
        echo "push live-recorder"
        docker push 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-recorder:$tag
    fi
fi

if [[ $@ == *'live-jobs'* ]] || [[ $@ == *'all'* ]] ; then
    echo "Build live-jobs"
    docker build -t  vidiun/live-jobs -f ./liveJobs/Dockerfile ../../
    echo "tag live-jobs:$tag"
    docker tag vidiun/live-jobs 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-jobs:$tag
    if [[ $@ == *'push'* ]]; then
        echo "push live-jobs"
        docker push 983882572364.dkr.ecr.eu-west-1.amazonaws.com/live-jobs:$tag
    fi
fi



cd $lastdir