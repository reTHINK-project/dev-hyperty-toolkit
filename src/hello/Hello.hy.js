class Hello {

  constructor() {
    let className = Hello.name;
    let text = document.createElement('span');
    let textnode = document.createTextNode('text added from the constructor of ' + className);
    text.appendChild(textnode);
    document.getElementsByTagName('body')[0].appendChild(text);
  }

}

export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'Hello',
    instance: new Hello(hypertyURL, bus, configuration)
  };

}
