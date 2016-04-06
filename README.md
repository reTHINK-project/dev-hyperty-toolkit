# Hyperty Development Toolkit

## Overview

This repository provides required tools to develop Hyperties, at this moment we only support development of hyperties to the Browser;

We hope soon have a version to support nodejs;

**TODO:**
 - Add a docker file with this pre-configured;

## Getting started

- [Development Guide](development)
- [Usage Guide](usage)

## <a id="development">Development Guide</a>

We have this repository pre-configured with the last version of RuntimeUA, Message Node ProtoStub (vertx) and Service-Framework;

To start the development of an Hyperty, you you should follow the steps:

  1. clone this repository; **NOTE:** this repository is only for read, you should use your own repository;

  2. run the command `npm install`;
  3. run the command `npm start`;

### The structure

#### **src**
Hold all your source code, like hyperties, main code, and other code you may need;

The hyperty class should have the suffix ".hy.js", on the file.

**Example:** Hello.hy.js

**Why?**
Because all the files in folder, could be a possible hyperty, with this suffix, we can distinguish the main hyperty from others files that complement it;

**Examples Working:**

- Hyperty Connector
- Hyperty Chat
- Hello World

For use your custom hyperty you need go to *function* ***hypertyDeployed*** on **main.js** and add your **hyperty name** and **javascript file** file to the switch cases present there.

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

#### **resources**
Works like a "local catalogue", this folder will emulate the remote catalogue, and avoid you need to send your hyperty in development to a remote catalogue;

Here we has a **descriptor** folder that holds the Hyperties, ProtoStubs and Runtimes;

When you save the hyperty, the process automatically will convert it from ES6 to ES5, and it is added to the Hyperties.json file, with the name of hyperty, but without the suffix ".hy.js";

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

#### **Test**

You can make your own tests to an hyperty, only need create an file with your hyperty name, and suffix the ".spec.js"

**Example:** Hello.spec.js

#### **examples**

In this folder you have, for each hyperty you develop, a respective application side.
This is customized with HTML using [Handlebars](http://handlebarsjs.com/) and ES5 javascript;

With this template system you can:

 - avoid the initial html setup, like **&lt;html&gt;, &lt;head&gt;, &lt;body&gt;**, and add only the html tags you need, like **&lt;div&gt;, &lt;p&gt;, &lt;b&gt;** and others.
 - use some extra features like, **variables, {{each}}, {{if}}**, look at [documentation](http://handlebarsjs.com/expressions.html)
 -

**Examples:**
 - hello-world > helloWorld.hbs
 - hyperty-chat > HypertyChat.hbs
 - hyperty-connector > HypertyConnector.hbs

### Tasks

#### <a id="serve">gulp serve</a> or <a id="serve">npm start</a>

This task will:

  1. create a local server;
  2. compile your hyperties to "local catalogue";
  3. make a distribution file on dist folder;
  3. reload your browser, with last changes;

```shell
gulp serve
```
or you can use
```shell
npm start
```

In both cases, you need to execute like `sudo` or, if you are using windows, open the terminal with **administrator permission**;

#### <a id="encode">gulp encode</a>

This task will:

  1. took a ES5 script, on resources folder;
  2. encode it to base64 format;
  3. add/update the respective file on the "local catalogue";

```shell
gulp encode
```

### Local vs testbed

At this moment, this only support the usage of local catalogue, but you can use the **msg-node.hybroker.rethink.ptinovacao.pt** and the respective **domain registy**, for that you should add the following code to your **hosts** file located:

 - on windows - **windows/system32/drivers/etc/hosts**
 - on unix system - **/etc/hosts**

**NOTE:** You need open this file with administration permission

 ```
 127.0.0.1   hybroker.rethink.ptinovacao.pt
 ```
