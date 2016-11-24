
Hyperty Development Toolkit [![Build Status](https://travis-ci.org/reTHINK-project/dev-hyperty-toolkit.svg?branch=develop)](https://travis-ci.org/reTHINK-project/dev-hyperty-toolkit)
=========================

This repository provides required tools to develop Hyperties and a few demos. Currently the toolkit can be used to develop hyperties to be executed in the Browser or in the NodeJS;


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


### To develop Hyperties for Browsers

```shell
# run the toolkit for browser and select where is the dev-hyperty repository
npm run start:browser

```
Open `https://catalogue.localhost/` and accept certificate

Open `https://localhost/` and select an Hyperty to run.

### To develop Hyperties for Nodejs

```shell
# or toolkit for nodejs and select where is the dev-hyperty repository
npm run start:node
```

## Other developments

The toolkit can also be used to test other rethink components.

* To test development branches from Runtime Core or Service Framework, Use Toolkit develop branch:

```shell
# clone the toolkit repository with the develop branches
git clone --branch=develop https://github.com/reTHINK-project/dev-hyperty-toolkit.git
```

* To test stable releases (master branch) from Runtime Browser or Runtime Node, Use Toolkit "runtimes" branch:

```shell
# clone the toolkit repository with the stable releases
git clone --branch=runtimes https://github.com/reTHINK-project/dev-hyperty-toolkit.git
```

* To test "develop" branches from Runtime Browser or Runtime Node, Use Toolkit "runtimes-develop" branch:

```shell
# clone the toolkit repository with the develop branches
git clone --branch=runtimes-develop https://github.com/reTHINK-project/dev-hyperty-toolkit.git
```
