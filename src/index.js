//src/index.js
import './index.less';
import printMe from './print.js';
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const dog = new Animal('dog');

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
  // module.hot.accept('./index.js', function() {
  //   console.log('Accepting the updated index module!');
  //   console.info(Date(), dog);
  // });
}
