# BB Coding Challenge

## __BB Cocktails service__

## Prerequisites 

### Software Installation

- [x] [NodeJS](https://nodejs.org/en/) | v14.15.0 or superior
- [x] [Docker](https://www.docker.com/) 
- [x] [Kubernetes](https://kubernetes.io/)
- [x] [Kubectl](https://kubernetes.io/docs/tasks/tools/)

## System Dependencies

- Make sure your system is up-to-date.

Developed on Ubuntu 22.04.1 LTS with NodeJS v14.15.0 and NPM 6.14.8

# Minikube (k8s)

```bash
# make sure the following files are executable
$ chmod +x cluster-up.sh cluster-down.sh deploy.sh tests.sh

# set up the cluster 
$ ./cluster-up.sh

# check the current state of the cluster's namespace
kubectl get pods -n bb-cc -w

# ingress via nginx (cluster ip)
$ minikube service list

# get access to the kubernetes dashboard
$ minikube dashboard
```

## Access the service

There is only one functional endpoint, which is the called [/dingdong](MINIKUBE_CLUSTER_IP:PORT/dingdong)

[http://MINIKUBE_CLUSTER_IP:PORT/dingdong](http://MINIKUBE_CLUSTER_IP:PORT/dingdong)

## Testing

```bash
$ ./tests.sh
```

# Host

## System Dependencies

- Run the below command to install NodeJS, NVM and its system dependencies


```bash
$ sudo apt install curl 
$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
$ nvm install 14.15.0
```

## NodeJS Dependencies

- Installing NodeJS Packages

```bash
$ npm i
```

- Locally running the server

```bash
$ npm run dev
```

## Access the service

Available at [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

There is only one functional endpoint, which is the called [/dingdong](http://127.0.0.1:8080/dingdong)

[http://127.0.0.1:8080/dingdong](http://127.0.0.1:8080/dingdong)

## Environment

Environment variables are defined in [**.env**](.env)

## Testing

```bash
$ npm run test
```
