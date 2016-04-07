
### Example Working

- WebRTC Connector
- Group Chat
- Hello World

# Hyperty Development Toolkit

## Overview

This repository provides required tools to develop Hyperties and a few demos. Currently limited to hyperties to be executed in the Browser;

We hope soon have a version to support nodejs;

## Getting started

- [Development Guide](development)
- [Usage Guide](usage)

## <a id="development">Development Guide</a>

This repository pre-configured with the last version of RuntimeUA, Message Node ProtoStub (vertx) and Service-Framework;

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

## <a id="usage">Usage Guide</a>
