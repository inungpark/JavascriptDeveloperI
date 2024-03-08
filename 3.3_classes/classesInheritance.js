class Animal {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hi, I am ${this.name}`);
  }
}
class Dog extends Animal {
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }
  hello() {
    super.hello();
    console.log(`and I ${this.sound}`);
  }
}

let louie = new Dog("louie", "bark");
console.log(louie);
console.log(louie.hello());