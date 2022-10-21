minikube start --driver=docker --install-addons=true --kubernetes-version=stable

# perform eval into minikube
eval $(minikube -p minikube docker-env)

# build docker image
docker build . -t jlacerdatng10/express --no-cache 

# create namespace deployment
kubectl create -f k8s/namespace/

# create code deployment
kubectl create -f k8s/code/

# create nginx deployment
kubectl create -f k8s/nginx/
