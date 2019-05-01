
export NAME=live.a.rtc.vidiun.com
export VOPS_STATE_STORE=s3://live.a.rtc.vidiun.com
vops create cluster --zones eu-west-1a,eu-west-1b,eu-west-1c --node-count=1 --node-size c5.2xlarge $NAME 
vops edit cluster $NAME 



kubectl apply -f ./deployment/kubernetes/config.yaml
kubectl apply -f ./deployment/kubernetes/live-front.yaml
kubectl apply -f ./deployment/kubernetes/live-publish.yaml

kubectl scale  sts live-publish --replicas=0


#find live -mtime +3  -ls -exec rm {} \;