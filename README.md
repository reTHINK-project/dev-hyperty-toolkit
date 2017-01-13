
Hyperty Development Toolkit [![Build Status](https://travis-ci.org/reTHINK-project/dev-hyperty-toolkit.svg?branch=develop)](https://travis-ci.org/reTHINK-project/dev-hyperty-toolkit)
=========================

This repository provides required tools to develop Hyperties and a few demos.
Currently the toolkit can be used to develop hyperties to be executed in the Browser or in the NodeJS;


## Full Documentation

See the [Wiki](https://github.com/reTHINK-project/dev-hyperty-toolkit/wiki) for full documentation, operational details and other information.

## Communication
- [Slack rethink-project](https://rethink-project.slack.com)
- [GitHub Issues](https://github.com/reTHINK-project/dev-hyperty-toolkit/issues)

## Quick Start

To run the toolkit do the following:

```shell
# clone the toolkit repository with the stable branches
git clone https://github.com/reTHINK-project/dev-hyperty-toolkit.git
```

```shell
# clone the dev-hyperty repository
git clone https://github.com/reTHINK-project/dev-hyperty.git

# go to the toolkit directory
cd dev-hyperty-toolkit

# install toolkit modules
npm install
```

### <a id="env">Configuration</a>

Configure all settings on the `env` file.

```shell
DEVELOPMENT=true # development mode or not, soon will be depracted
RUNTIME_URL=hyperty-catalogue://catalogue.localhost/.well-known/runtime/Runtime # place in the catalogue where is your runtimeURL
DOMAIN=localhost # domain where the toolkit will run and reference to contact msg-node
HYPERTY_REPO=../dev-hyperty # path to locate your dev-hyperty repository by default, is on the parent directory.. but you can change it
```
You are free to change for what you want..


### To develop Hyperties for Browsers

```shell
# run the toolkit with runtime-core
npm run start:dev

# run the toolkit with runtime-browser
npm run start:browser
```
Open `https://catalogue.localhost/` and accept certificate

Open `https://localhost/` and select an Hyperty to run.

### To develop Hyperties for Nodejs

```shell
# or toolkit for nodejs and select where is the dev-hyperty repository
npm run start:node
```

### Production Mode

This file will not be loaded if you run the toolkit in on production mode:

```shell
npm run start
```

## Build hyperties

You can build hyperties without running the toolkit.

```shell
npm run build:hyperties # build the hyperties to be used on browser
npm run build:hyperties:node # build the hyperties to be used on nodejs
```
On each initial descriptor of hyperty on dev-hyperty repository, if you want replace the your descriptor static domain for the one which is on [env file](#env) you should replace your domain for `%domain%`.