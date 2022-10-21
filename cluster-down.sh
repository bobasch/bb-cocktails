# delete nginx deployment
kubectl delete -f k8s/nginx/

# delete code deployment
kubectl delete -f k8s/code/

# delete namespace deployment
kubectl delete -f k8s/namespace/

minikube delete
