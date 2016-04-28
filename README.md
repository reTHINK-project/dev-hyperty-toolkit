
Hyperty Development Toolkit
-------------------------

This repository provides required tools to develop Hyperties and a few demos. Currently limited to hyperties to be executed in the Browser. Soon NodeJS support will also be added;

**TODO:** Add a docker file with this pre-configured;

-	[Overview](#rethink-framework-overview)
-	[Getting Started](#quick-start)

### Overview

reTHINK Project provides a Javascript framework to build and deliver Real Time Communication Microservices in end-user devices (browsers and standalone mobile apps) and in Network edge servers (NodeJS):

* **Hyperty** is a the so called Javascript Microservice that communicates through P2P Data Synchronisation with mimimum usage of back-end services; A Hyperty must be deployed in a runtime (as mentioned in an end-user device or Network edge server).
* **Protocol on-the-fly** is used by Hyperties to support seamless interoperability without federation or standardisation of network protocols;
* Hyperties are **Trustful**. Hyperties are decoupled from the User Identity, which can be securely asserted by existing IDPs (Identity Provider), when communicating with other Hyperties.

In case you want want to know more details about reTHINK, have a look [here](docs/tutorials/readme.md)

### Quick Guide

To start the development of an Hyperty (make sure you have node 5.4 and npm 3.3 globaly available in your environment), perform the following steps:

1. clone this repository; **NOTE:** this repository is read only. Your Hyperties Source Code should be hosted somewhere else;

2. run the command `npm install` (this may take some minutes) followed by the command `npm start`;

3. move to *src* folder and create a folder for your hyperty project e.g. "hello-world". In each folder you should create two types of files:

- a ".hy.js" containing your Hyperty classes. For example the [HelloWorldReporter.hy.js](/src/hello-world/HelloWorldReporter.hy.js) looks like:

 ```
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

 Another example is the [HelloWorldObserver.hy.js](/src/hello-world/HelloWorldObserver.hy.js) which is Hyperty observing changes on the Hello Data Object performed by the Observer:

 ```
 // This is the Hello World Observer who subscribes the Hello Data Object to be synched with it.

  syncher.subscribe(_this._objectDescURL, event.url).then(function(helloObjtObserver) {

 // Any change done in the Hello Object by the Reporter will be received by the Observer:

 helloObjtObserver.onChange('*', function(event) {

   // Object was changed, let's do something
   console.log('Hello was changed: ', helloObjtObserver.data);

 });
```

- a ".ds.json" containing the JSON-Schema describing data objects handled by your Hyperty e.g. HelloWorldDataSchema.ds.json:

 ```
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

  This is optional in case you are reusing existing data schemas. **To Do:** explain how to reuse existing data schemas.

4. To test your Hyperty, you need to:

 - expose your Hyperty to Testing Web App by editing *function* ***hypertyDeployed*** on **main.js** and add your **hyperty name** and **javascript file name** to the switch cases defined there.

 - In case your Hyperty exposes an API to be used by a Web App, you should move to "examples" folder and create a folder containing your testing App HTML templates using [Handlebars](http://handlebarsjs.com/).

 - To avoid the installation of reTHINK back-end (Messaging Node and Domain Registry), you can change your hosts file to point to your `localhost` the DNS name of an existing reTHINK domain like `hybroker.rethink.ptinovacao.pt`. **to do:** provide a link for the back-end setup guide

5. Open `https://localhost/examples/` with your favorite browser and select your Hyperty to execute. Currently you may find there four demos:

 - Hello World Reporter;

 - Hello World Observer that observes changes made by the first Hello World Reporter;

 - WebRTC Connector example;

 - Group Chat;

### Cloud and Local development environment

#### Cloud Development Environment

The toolkit is pre-configured to use **hybroker.rethink.ptinovacao.pt** cloud development environment. In case you want to use another reTHINK cloud environment the following changes must be done:

- set the cloud development environment domain at [system.config.json](system.config.json)

- [provision the ProtoStub](#gulp-encode) to be used to connect to the new development domain in Local Catalogue

- change your **hosts** file located:

 - on windows - **windows/system32/drivers/etc/hosts**
 - on unix system - **/etc/hosts**

**NOTE:** You need open this file with administration permission

 ```
 127.0.0.1   hybroker.rethink.ptinovacao.pt
 ```

#### Local Development Environment

In case you prefer not to depend on third party services you also have the option to install the full reTHINK environment in you local development environment. In that case follow these guidelines. **to do:** provide here the link for the installation guide.

### The Repository structure

#### **src** folder

Hold all Hyperty related source code, like hyperty classes and JSON-Schemas. The hyperty class must have the suffix ".hy.js", on the file.

**Example:** Hello.hy.js

**Why?**
Because all the files in folder, could be a possible hyperty, with this suffix, we can distinguish the main hyperty from others files that complement it;

To expose your hyperty in the Testing Web App you need to go to *function* ***hypertyDeployed*** on **main.js** and add your **hyperty name** and **javascript file** file to the switch cases presented there.

**example:**

```javascript

function hypertyDeployed(hyperty) {

  ...
  switch (hyperty.name) {

    // You can add your own hyperty with this code
    case '<hyperty name>':
      template = '<hyperty-name>/<HypertyName>';
      script =  '<hyperty-name>/<app.js>';
      break;
  }
}
```
**NOTE:** This probably need to be optimized, suggestion are welcome;

#### **resources** folder

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



#### **examples** folder

In this folder you have, for each hyperty you develop, the Web side testing.
This is customized with HTML using [Handlebars](http://handlebarsjs.com/) and ES5 javascript;

With this template system you can:

 - avoid the initial html setup, like **&lt;html&gt;, &lt;head&gt;, &lt;body&gt;**, and add only the html tags you need, like **&lt;div&gt;, &lt;p&gt;, &lt;b&gt;** and others.
 - use some extra features like, **variables, {{each}}, {{if}}**, look at [documentation](http://handlebarsjs.com/expressions.html)
 -

**Examples:**
 - hello-world > helloWorld.hbs
 - hyperty-chat > HypertyChat.hbs
 - hyperty-connector > HypertyConnector.hbs

#### **Test** folder

 You can make your own tests to an hyperty, only need create an file with your hyperty name, and suffix the ".spec.js"

 **Example:** Hello.spec.js

### Gulp Tasks

The following Gulp Tasks are provided:

#### <a id="serve">gulp serve</a> or <a id="serve">npm start</a>

This task will:

  1. create a local server;
  2. compile your hyperties to "local catalogue";
  3. make a distribution file on dist folder;
  3. reload your browser, with last changes;

```shell
# working with develop environment
# this will use the local catalogue
npm start --dev

# working with production environment
# this will use the catalogue specified for production on system.config.json
npm start
```
The [system.config.json](system.config.json) file contains some configuration, just could be changed for each environment;

In both cases, you need to execute like `sudo` or, if you are using windows, open the terminal with **administrator permission**;

#### <a id="encode">gulp encode</a>

This task will:

  1. took a ES5 script, on resources folder;
  2. encode it to base64 format;
  3. provision the resource in the "local catalogue";

```shell
gulp encode
```
