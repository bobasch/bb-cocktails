# BB Coding Challenge

## __BB Cocktails service__

## Prerequisites 

### Software Installation

- [x] [NodeJS](https://nodejs.org/en/) | v14.15.0 or superior

## System Dependencies

- Make sure your system is up-to-date.

Developed on Ubuntu 22.04.1 LTS with NodeJS v14.15.0 and NPM 6.14.8

# Host

## System Dependencies

- Run the below command to install NodeJS, NVM and its system dependencies


```bash
$ sudo apt install curl 
$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
$ nvm nvm install 14.15.0
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

Available at [http://127.0.0.1:3123/](http://127.0.0.1:3123/)

There is only one functional endpoint, which is the called [/dingdong](http://127.0.0.1:3123/dingdong)

[http://127.0.0.1:3123/dingdong](http://127.0.0.1:3123/dingdong)

## Environment

Environment variables are defined in [**.env**](.env)

## Testing

```bash
$ npm run test
```
