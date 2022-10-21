# perform eval into minikube
eval $(minikube -p minikube docker-env)

# build docker image
docker build . -t jlacerdatng10/express

# delete deployment
kubectl delete -f k8s/code/

# create deployment
kubectl create -f k8s/code/
