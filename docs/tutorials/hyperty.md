 "These Tutorials are for Phase 1!! Most updated version is [here](https://github.com/reTHINK-project/specs/tree/master/tutorials)" 
=============== 
Hyper-linked Entities - Hyperties
---------------------------------

This document provides an overview about the Hyperty concept and it should be the starting point for any new developer. After this document, all developers should also read:

-	the [Hyperty Messaging Framework overview](hyperty-messaging-framework.md)
-	the [Reporter - Observer Data Synchronisation model](p2p-data-sync.md)
-	the [Hyperty Trust and Security Model](hyperty-trust.md)

Hyperties are cooperative [Microservices](http://martinfowler.com/articles/microservices.html) that are executed in devices on behalf of users through simple but sophisticated Identity Management techniques. This means, Hyperties are independently deployable components each one providing a small set of business capabilities, using the *smart endpoints and dumb pipes* philosophy i.e. Hyperties don't depend on complex and sophisticated communication middleware like Enterprise Service BUS (ESB). Instead, Hyperties rely on a very light but powerful [Messaging Framework](hyperty-messaging-framework.md) concept). On the other side, Hyperties follow emerging [Edge](https://en.wikipedia.org/wiki/Edge_computing) and [Fog](https://en.wikipedia.org/wiki/Fog_computing) computing paradigms as opposed to more popular Cloud Computing. Hyperties can also be executed in Network Servers for specific Business Capabilities (e.g. Media Servers) or when End-user devices don't have enough capabilities in terms of computing resources and/or power.

![Hyperty Concept and Edge Computing](hyperty-concept1.png)

Compared with other Real Time Communication Development Frameworks, Hyperties provides a few unique advantages:

- Hyperty reinforces modular structure, which is particularly important for larger and complex Applications.
- Hyperties from different Service Providers can easily cooperate with no federation required or the standardisation of Protocols.
- Hyperties uses a simple but powerful Trust model where the User Identity is decoupled from the Hyperty Service Provider enabling the end-user to decide which is the Identity to be used with a certain Hyperty instance.
- Hyperties follow edge computing principles, promoting a more effective usage of computing and network resources, as well as decreasing communication latency.
- the development of Hyperties and Applications is very easy and flexible, giving the freedom to the developer to select its favorite web framework.
- Hyperties can be used on any Application Domain, but they are specially suitable for Real Time Communication Apps (eg Video Conference and Chat) as well as IoT Apps.


More details about Hyperties unique characteristics:

-	Hyperties are programmed in Javascript ECMA5/6, i.e. any existing device featuring a Browser or a NodeJS can be used today to execute Hyperties without requiring the installation of any new software. This means, **billions of devices** are already Hyperty enabled and ready to participate in the reTHINK ecosystem. The [Hyperty Core Runtime](https://github.com/reTHINK-project/dev-runtime-core), provides additional features not natively supported by current Web Runtimes that are required to safely manage the deployment and execution of Hyperties. The Hyperty Core Runtime is also programmed in Javascript ECMA5/6 and is deployed on-the-fly along with the Hyperty if not done before.
-	The User Identity associated to an Hyperty is decoupled from the Hyperty Service Provider. I.e. Identity Management is handled under the scene and the Developer does not have to care about it and just have to focus on the development of Business Capabilities. This also means, the end-user has the power to decide which is the Identity to be securely associated to a certain Hyperty instance. More information is provided in [the Hyperty Security and Trust Model document](hyperty-trust.md).
-	Hyperties cooperate and communicate each other via P2P Synchronisation of Hyperty JSON Data Objects supported by the [Reporter - Observer communication pattern](p2p-data-sync.md). For example, as soon as there is new measurement collected from a sensor the data is set in a associated JSON Object. As soon as there is a change in this JSON Object, the change is reported by the Reporter Hyperty to any authorised Observer Hyperty. In this way, the JSON Object handled by Observer Hyperty is always synchronised with the JSON Object owned by the Reporter Hyperty.

![Reporter-Observer Communication Pattern](reporter-observer.png)

The API to handle the Synchronisation of Hyperty Data Objects is extremely simple and fun to use. The Developer of the Hyperty Reporter just has to create the Data Sync object with the Syncher API, and write on the object every time there is data to be updated and shared with Hyperty Observers.

```
    syncher.create(_this._objectDescriptorURL, [invitedHypertyURL], hello).then(function(dataObjectReporter) {

    console.info('Hello Data Object was created: ', dataObjectReporter);

    dataObjectReporter.data.hello = "Bye!!";
    }
```

On the Hyperty Observer side, Data Objects are also created with the Syncher API and the emerging [Object.observer() Javascript method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) is used to receive the stream of data changes coming from the Reporter Hyperty.

```
  syncher.subscribe(_this._objectDescriptorURL, ObjectUrl).then(function(dataObjectObserver) {}

  dataObjectObserver.onChange('*', function(event) {
          // Hello World Object was changed
          console.info(dataObjectObserver);
        });
```

-	Hyperties can easily cooperate with Hyperties from other domains with no federation required or the standardisation of Protocols thanks to the [Protocol On-the Fly powered Messaging Framework](hyperty-messaging-framework.md). Hyperties only have to agree on a common json-schema for one or more Hyperty Data Objects, in order to be able to cooperate each other.

-	Hyperties can be used on any Application Domain, but they are specially suitable for Real Time Communication Apps (eg Video Conference and Chat) as well as IoT Apps.
