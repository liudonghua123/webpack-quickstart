//index.js
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const dog = new Animal('dog');
console.info(dog);
