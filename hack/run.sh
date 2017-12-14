#!/bin/sh

hack/create_local_pv.sh
helm install charts/preparathon --name test
