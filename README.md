
Hyperty Development Toolkit
=========================

This repository provides required tools to develop Hyperties and a few demos. Currently limited to hyperties to be executed in the Browser. Soon NodeJS support will also be added;


- [Change Log](#log)
- [Overview](#overview)
- Quick Guide Setup
  - [Setup with docker and docker-compose](#docker)
  - [Setup form source code](#code)
- [First Hyperty Development](#first)
- Cloud and Local development environment
  - [Cloud](#cloud)
  - [Local](#local)
- [The Repository structure](#repository)
- [Gulp Tasks](#tasks)
  - [Start server](#serve)
  - [Encode components](#encode)


<a name="log"/>

## Change Log

##### versions

- [x] RuntimeUA | [develop-improves-revised-catalogue](https://github.com/reTHINK-project/dev-runtime-core/tree/develop-improves-revised-catalogue) branch
- [x] Service Framework | [revised-catalogue](https://github.com/reTHINK-project/dev-service-framework/tree/revised-catalogue) branch
- [x] message node vertx | [develop](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/develop)
- [x] domain-registy | [master](https://github.com/reTHINK-project/dev-registry-domain)

##### Improves

- [x] now toolkit run on root, you don't need add the `/examples`;
- [x] toolkit now support the same request as dev-catalogue (in the easy way and limited, the point is not replicate the dev-catalogue).
      Now we don't need something like, `resources/descriptors/Hyperties.json` you can use the `/.well-known/hyperty/Connector` eg.

##### Fixes

- [x] [21](https://github.com/reTHINK-project/dev-hyperty-toolkit/issues/21) - Alternative Port
- [x] [16](https://github.com/reTHINK-project/dev-hyperty-toolkit/issues/16) - Missing dependency: urijs
- [x] [5](https://github.com/reTHINK-project/dev-hyperty-toolkit/issues/5) - if you run the toolkit with [docker](#docker) this issue was solved
      ​

<a name="overview"/>

## Overview

reTHINK Project provides a Javascript framework to build and deliver Real Time Communication Microservices in end-user devices (browsers and standalone mobile apps) and in Network edge servers (NodeJS):

* **Hyperty** is similar to an Agent or a Bot that performs tasks on user's behalf, by communicating through P2P Data Synchronisation with other Hyperties. Some examples (see demos), are:

  - the Hyperty Connector that uses WebRTC to manage video calls between users;

  - the Group Chat Hyperty (name says it all);

  - the myBracelet Hyperty, is a sensing Hyperty that encapsulates a Bracelet, by collecting and publishing data from it

  - the myContext Hyperty is a Big Data Hyperty that uses data published by different sensing Hyperties (like the myBracelet Hyperty) to infer and calculate more meaningful Contextual data about the user.

* **Protocol on-the-fly** is used by Hyperties to support interoperability with other Hyperties from other domains, without requiring federation or standardisation of network protocols;
* Hyperties are **Trustful**. Hyperties are decoupled from the User Identity, which can be securely asserted by existing IDPs (Identity Provider), when communicating with other Hyperties.

In case you want want to know more details about reTHINK, have a look [here](docs/tutorials/readme.md)

## Quick Guide Setup

<a name="docker"/>

### With docker and docker-compose

You can run the toolkit with docker and docker-compose.

1. install docker - you could know more information [here](https://docs.docker.com/engine/installation/)

2. install docker-compose - you could know more information [here](https://docs.docker.com/compose/install/), if you are using **windows** or **Mac OS** you can install docker-toolbox, see [here](https://docs.docker.com/toolbox/overview/)

3. You can configure the service on [docker-compose.yml]() file

   **IP** - by default the service run on ip 172.18.0.32 on port 443

   **ENVIRONMENT VARIABLES**

   ​    by default the environment variables are these, but you should configure for yours:

   >       - DEVELOPMENT=true
   >       - RUNTIME_URL=hyperty-catalogue://hybroker.rethink.ptinovacao.pt/.well-known/runtime/Runtime
   >       - DOMAIN=hybroker.rethink.ptinovacao.pt
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

5. open your **hosts** file an add the following configuration:

   ```shell
   172.18.0.32 hybroker.rethink.ptinovacao.pt
   172.18.0.32 catalogue.hybroker.rethink.ptinovacao.pt
   ```

   **note:** more information related with hosts file [here](#cloud)

   ​

6. Some usefull commands

   `docker-compose logs -f hyperty-toolkit ` - to see all the logs of service

   `docker-compose build hyperty-toolkit` - to rebuild the service

   `docker images` - list all images

   `docker rmi <id>` - remove image with <id>;

   ​

<a name="code"/>

### From source code

To setup the Hyperty development (starter project), make sure you have nodeJS available in your environment, perform the steps below. In case you want to use Hyperties in your Application please read [this tutorial](docs/tutorials/development-of-apps.md).
**NOTE for Windows Users:** You should use "Windows PowerShell" and not the standard command line.

1. download [the latest release](https://github.com/reTHINK-project/dev-hyperty-toolkit/releases); **NOTE:** this repository is read only. Your Hyperties Source Code should be hosted somewhere else (see below step 2);

2. run the command `npm install` (this may take some minutes)

3. to avoid the installation of reTHINK back-end (Messaging Node and Domain Registry), add the lines to your hosts file:
```shell
 127.0.0.1   hybroker.rethink.ptinovacao.pt
 127.0.0.1   catalogue.hybroker.rethink.ptinovacao.pt
```

* In Linux is normally available at: `/etc/hosts`
* In windows is normally available at: `C:\Windows\System32\drivers\etc\hosts`

4. Create the folder thet will contain your Hyperty source code Side by side with toolkit folder. We strongly recommend you to use the "official" Hyperty repository by cloning [dev-hyperty](https://github.com/reTHINK-project/dev-hyperty). IN case you prefer to use somethinf else, you must create a sub-folder "src" where your Hyperty source code will be stored (`<foldername>/src`) and a sub-folder "examples" containing demos/tests for your hyperties.

5. run the local http-server and catalogue with `npm run start:dev`. A list of folders that are side by side with the toolkit folder will be presented. Select the one you have created in step 2 to contain your hyperty source.

6. Check the following url's to allow the certificates:
* https://hybroker.rethink.ptinovacao.pt
* https://catalogue.hybroker.rethink.ptinovacao.pt

7. Open `https://hybroker.rethink.ptinovacao.pt/examples/` with your favorite browser and select your Hyperty to execute. Currently you may find there four demos:

- Hello World Reporter;
- Hello World Observer that observes changes made by the first Hello World Reporter;
- WebRTC Connector example;
- Group Chat;

<a name="first"/>

## First Hyperty Development

1. move to *src* folder and create a folder for your hyperty project e.g. "hello-world". In each folder you should create two types of files:

- a ".hy.js" containing your Hyperty classes. For example, the [HelloWorldReporter.hy.js](/src/hello-world/HelloWorldReporter.hy.js) owns and reports changes to the Hello Data Object that will be received by the [HelloWorldOberver.hy.js](/src/hello-world/HelloWorldObserver.hy.js).

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
 		"hello": {
 			"type": "string"
 		}
 	}
 }
```

  This is optional in case you are reusing existing [data schemas](https://github.com/reTHINK-project/dev-service-framework/tree/master/schemas/json-schema/data-objects). In that situation, you just have to set in your Hyperty Descriptor the Catalogue URL that points to the data schema (see below).

2. You can Complete your Hyperty Descriptor by editing the file with sufix ***name-of-hyperty.hy.json** where you have the hyperty source code;

3. To test your Hyperty, you need to move the dev-hyperty (or where is located your source code) folder and:

- move to *"examples"* folder and expose your Hyperty to Testing Web App by editing *function* ***hypertyDeployed*** on **main.js** and add your **hyperty name** and **javascript file name** to the switch cases defined there.

- In case your Hyperty exposes an API to be used by a Web App, you should move to *"examples"* folder and create a folder containing your testing App HTML templates using [Handlebars](http://handlebarsjs.com/).

## Cloud and Local development environment

<a name="cloud" />

### Cloud Development Environment

The toolkit is pre-configured to use **hybroker.rethink.ptinovacao.pt** cloud development environment. In case you want to use another reTHINK cloud environment the following changes must be done:

- set the cloud development environment domain at [system.config.json](system.config.json)

- [provision the ProtoStub](#gulp-encode) to be used to connect to the new development domain in Local Catalogue

- change your **hosts** file located:

- on windows - **windows/system32/drivers/etc/hosts**
- on unix system - **/etc/hosts**

**NOTE:** You need open this file with administration permission and add this:

```shell
127.0.0.1   hybroker.rethink.ptinovacao.pt
127.0.0.1   catalogue.hybroker.rethink.ptinovacao.pt
```

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
  "Hello": {
    "sourcePackage": {
      "sourceCode":  "SGVsbG8=",
      "sourceCodeClassname": "Hello",
      "encoding": "base64",
      "signature": ""
    },
    "cguid": 1,
    "type": "Hyperties",
    "version": "0.1",
    "description": "Description of Hello",
    "objectName": "Hello",
    "configuration": {},
    "sourcePackageURL": "/sourcePackage",
    "language": "javascript",
    "signature": "",
    "messageSchemas": "",
    "dataObjects": [],
    "accessControlPolicy": "somePolicy"
  }
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
