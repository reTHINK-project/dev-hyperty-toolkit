import {teste} from '../utils/utils';

class Hello {

  constructor() {
    console.log('testes');
    console.log(teste());
  }

}

export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'Hello',
    instance: new Hello(hypertyURL, bus, configuration)
  };

}
