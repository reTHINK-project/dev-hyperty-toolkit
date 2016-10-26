
Hyperty Development Toolkit
=========================

This repository provides required tools to develop Hyperties and a few demos. Currently the toolkit can be used to develop hyperties to be executed in the Browser or in the NodeJS;


- [Overview](#overview)
- Quick Guide Setup
  - [Setup form source code](#code)
  - [Setup with docker and docker-compose](#docker)
- [First Hyperty Development](#first)
- Cloud and Local development environment
  - [Cloud](#cloud)
  - [Local](#local)
- [The Repository structure](#repository)
- [Gulp Tasks](#tasks)
  - [Start server](#serve)
  - [Encode components](#encode)

<a name="overview"/>

## Overview

reTHINK Project provides a Javascript framework to build and deliver Real Time Communication Microservices in end-user devices (browsers and standalone mobile apps) and in Network edge servers (NodeJS):

* **Hyperty** is similar to an Agent or a Bot that performs tasks on user's behalf, by communicating through P2P Data Synchronisation with other Hyperties. Some [examples](https://github.com/reTHINK-project/dev-hyperty) ([see demos](https://hybroker.rethink.ptinovacao.pt/examples/)), are:

  - the [Hyperty Connector](https://github.com/reTHINK-project/dev-hyperty/tree/master/docs/connector) that uses WebRTC to manage video calls between users;

  - the [Group Chat Hyperty](https://github.com/reTHINK-project/dev-hyperty/tree/master/docs/group-chat-manager) (name says it all);

  - the [myBracelet Hyperty](https://github.com/reTHINK-project/dev-hyperty/tree/master/docs/bracelet), is a sensing Hyperty that encapsulates a Bracelet, by collecting and publishing data from it

  - the myContext Hyperty is a Big Data Hyperty that uses data published by different sensing Hyperties (like the myBracelet Hyperty) to infer and calculate more meaningful Contextual data about the user.

* **Protocol on-the-fly** is used by Hyperties to support interoperability with other Hyperties from other domains, without requiring federation or standardisation of network protocols;
* Hyperties are **Trustful**. Hyperties are decoupled from the User Identity, which can be securely asserted by existing IDPs (Identity Provider), when communicating with other Hyperties.

In case you want want to know more details about reTHINK, have a look on the [full specification](https://github.com/reTHINK-project/specs/blob/master/README.md)

## Quick Guide Setup

<a name="docker"/>


<a name="code"/>

### From source code

To setup the Hyperty development (starter project), make sure you have nodeJS available in your environment, perform the steps below. In case you want to use Hyperties in your Application please read [this tutorial](docs/tutorials/development-of-apps.md).
**NOTE for Windows Users:** You should use "Windows PowerShell" and not the standard command line.

1. download [the latest release](https://github.com/reTHINK-project/dev-hyperty-toolkit/releases); **NOTE:** this repository is read only. Your Hyperties Source Code should be hosted somewhere else (see below step 2);

2. run the command `npm install` (this may take some minutes)

3. Create the folder that will contain your Hyperty source code Side by side with toolkit folder. We strongly recommend you to use the "official" Hyperty repository by cloning [dev-hyperty](https://github.com/reTHINK-project/dev-hyperty). IN case you prefer to use something else, you must create a sub-folder "src" where your Hyperty source code will be stored (`<foldername>/src`) and a sub-folder "examples" containing demos/tests for your hyperties.

4. run the local http-server and catalogue with `npm run start:browser` or `npm run start:node` in case you are developing Hyperties for NodeJS. A list of folders that are side by side with the toolkit folder will be presented. Select the one you have created in previous step  to contain your hyperty source.

5. Check the following url's to allow the certificates:


* https://localhost
* https://catalogue.localhost

6. Open `https://localhost` with your favorite browser and select your Hyperty to execute.


### With docker and docker-compose

In case you already have docker installed you can use it together with docker-compose.

1. install docker - see [here](https://docs.docker.com/engine/installation/)

2. install docker-compose - see [here](https://docs.docker.com/compose/install/), if you are using **windows** or **Mac OS** you can install docker-toolbox, see [here](https://docs.docker.com/toolbox/overview/)

3. You can configure the service on [docker-compose.yml]() file

   **IP** - by default the service run on ip 172.18.0.32 on port 443

   **ENVIRONMENT VARIABLES**

   ​    by default the environment variables are:

   **Toolkit develoment mode** - `true` when used in a local development environment, `false` when used at the backend.
   >       `- DEVELOPMENT=true`

   **RUNTIME_URL** - where the Runtime is loaded from
   >       - RUNTIME_URL=hyperty-catalogue://hysmart.rethink.ptinovacao.pt/.well-known/runtime/Runtime

   **Domain** - the domain where Message Node and Domain Registry services are hosted
   >       - DOMAIN=localhost

   **Hyperty Repo** - variable with the Hyperty source code repository.
   >       - HYPERTY_REPO=/tmp/dev-hyperty

   **VOLUMES** - define here is your dev-hyperty repository

   > ../dev-hyperty:/tmp/dev-hyperty | **note** if you need, change only the first part of configuration;

4. After all instalation process and configuration, go to your **command line** and run:

   `docker-compose up hyperty-toolkit`

   ```reStructuredText
   Usage: docker-compose up [options] [SERVICE...]
   OPTIONS:
   	-d 				   Detached mode: Run containers in the background,
                          print new container names.
   ```

5. Some usefull commands

   `docker-compose logs -f hyperty-toolkit ` - to see all the logs of service

   `docker-compose build hyperty-toolkit` - to rebuild the service

   `docker images` - list all images

   `docker rmi <id>` - remove image with <id>;

   ​

<a name="first"/>

## First Hyperty Development

1. move to *src* folder and create a folder for your hyperty project e.g. "hello-world". In each folder you should create two types of files:

- a ".hy.js" containing your Hyperty classes. For example, the [HelloWorldReporter.hy.js](https://github.com/reTHINK-project/dev-hyperty/tree/master/src/hello-world/HelloWorldReporter.hy.js) owns and reports changes to the Hello Data Object that will be received by the [HelloWorldObserver.hy.js](https://github.com/reTHINK-project/dev-hyperty/tree/master/src/hello-world/HelloWorldObserver.hy.js).


 The HelloWorldReporter.hy.js looks like:

```javascript
 // This is the Hello World Reporter who owns and reports changes done in the Hello Data Object.

 // The `hello()` function is used to create the Hello Data Object
 // and invite an Hello World Observer (`hypertyURL`):

     syncher.create(_this._objectDescURL, [hypertyURL], hello).then(function(helloObjtReporter) {

         helloObjtReporter.onSubscription(function(event) {

         // All subscription requests are accepted

         event.accept();
       });

       resolve(dataObjectReporter);

     })
     .catch(function(reason) {
       console.error(reason);
       reject(reason);
     });

   });
 }

 // This is the "Bye()" function that changes the Hello Object.

 helloObjtReporter.data.hello = "Bye!!";

 // This change  will be received by the Observer:
```

  The Hello World Observer (which is the Hyperty observing changes on the Hello Data Object performed by the Hello World Reporter) looks like :

```javascript
 // This is the Hello World Observer who subscribes the Hello Data Object to be synched with it.

  syncher.subscribe(_this._objectDescURL, event.url).then(function(helloObjtObserver) {

 // Any change done in the Hello Object by the Reporter will be received by the Observer:

 helloObjtObserver.onChange('*', function(event) {

   // Object was changed, let's do something
   console.log('Hello was changed: ', helloObjtObserver.data);

 });
```

- a ".ds.json" containing the JSON-Schema describing data objects handled by your Hyperty e.g. HelloWorldDataSchema.ds.json:

```json
 {
 	"$schema": "http://json-schema.org/draft-04/schema#",
 	"id": "HelloObject",
 	"type": "object",
 	"required": ["hello"],
 	"additionalProperties": false,
   "properties": {
 		"scheme": {
 			"constant": "hello"
 		},
    "constraints": {
      "browser": true
    },
 		"hello": {
 			"type": "string"
 		}
 	}
 }
```

  This is optional in case you are reusing existing [data schemas](https://github.com/reTHINK-project/specs/tree/master/schemas/json-schema/data-objects). In that situation, you just have to set in your Hyperty Descriptor the Catalogue URL that points to the data schema (see below).

2. You can Complete your Hyperty Descriptor by editing the file with sufix ***name-of-hyperty.hy.json** where you have the hyperty source code;

3. To test your Hyperty, you need to go to dev-hyperty (or where is located your source code) folder and:

- go to *"examples"* folder and expose your Hyperty to Testing Web App by editing *function* [***hypertyDeployed*** on **main.js**](https://github.com/reTHINK-project/dev-hyperty/blob/master/examples/main.js#L21) and add your **hyperty name** and **javascript file name** to the switch cases defined there.

- In case your Hyperty exposes an API to be used by a Web App, you should go to *"examples"* folder and create a folder containing your testing App HTML templates using [Handlebars](http://handlebarsjs.com/).

### Cloud and Local development environment

<a name="cloud" />

### Cloud Development Environment

The toolkit is pre-configured to use **hysmart.rethink.ptinovacao.pt** cloud development environment. In case you want to use another reTHINK cloud environment the following changes must be done:

- [provision the ProtoStub](#gulp-encode) to be used to connect to the new development domain in Local Catalogue


<a name="local" />

### Local Development Environment

In case you prefer not to depend on third party services you also have the option to install the full reTHINK environment in you local development environment. In that case follow these guidelines.

**to do:** provide here the link for the installation guide.

<a name="repository" />

## The Repository structure

#### Resources folder

This folder contains all files to be served by the Local Development Catalogue. The Local Development Catalogue avoids the provisioning of your hyperty to a [remote catalogue](https://github.com/reTHINK-project/dev-catalogue);

The **descriptor** folder contains the descriptors and source code of required Hyperties, ProtoStubs, Hyperties and Runtimes,

When you save the Hyperty, the process automatically converts it from ES6 to ES5, and it is added to the Hyperties.json file, with the name of hyperty, but without the suffix ".hy.js".

**Example**

Hyperties.json
```json
{
  "language": "javascript",
  "signature": "",
  "configuration": {},
  "constraints": {
    "browser": true,
    "node": true
  },
  "hypertyType": [
    "hello"
  ],
  "dataObjects": [
    "https://catalogue.hybroker.rethink.ptinovacao.pt/.well-known/dataschema/HelloWorldDataSchema"
  ]
}
```

The same happens with JSON-Schemas that are added / updated in the DataSchemas.json file.


<a name="tasks" />

## Gulp Tasks

The following Gulp Tasks are provided:

<a name="gulp-serve" />

###  gulp serve or  npm run start:dev

If you are a **linux** user read this:
> Use CAP_NET_BIND_SERVICE to grant low-numbered port access to a process.

> With this you can grant permanent access to a specific binary to bind to low-numbered ports via the setcap command:

> After doing this, /path/to/binary will be able to bind to low-numbered ports.

You should execute this command once, this will prevent you need start the server with `sudo`:
```shell
 sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/binary/node
```

***NOTE: you can see more information on [superuser.com](http://superuser.com/questions/710253/allow-non-root-process-to-bind-to-port-80-and-443)***

This task will:

  1. create a local server;
  2. compile your hyperties to "local catalogue";
  3. make a distribution file on dist folder;
  4. reload your browser, with last changes;

```shell
# working with develop environment
# this will use the local catalogue
npm run start:dev

# working with production environment
# this will use the catalogue specified for production on system.config.json
npm start
```
The [system.config.json](system.config.json) file contains some configuration, just could be changed for each environment;

In both cases, you need to execute like `sudo` or, if you are using windows, open the terminal with **administrator permission**;

<a name="gulp-encode" />

### gulp encode

This task will:

  1. took a ES5 script, on resources folder;
  2. encode it to base64 format;
  3. provision the resource in the "local catalogue";

```shell
gulp encode
```

### [Troubleshooting](troubleshouting.md)
