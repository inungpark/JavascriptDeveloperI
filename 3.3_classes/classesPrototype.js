function Animal(name) {
  this.name = name;
}
Animal.prototype.hello = function () {
  console.log(`Hi, I am ${this.name}`);
};
function Dog(name, sound) {
  Animal.call(this, name);
  this.sound = sound;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.hello = function () {
  Animal.prototype.hello.call(this);
  console.log(`and I ${this.sound}`);
};

let louie = new Dog("louie", "bark");
console.log(louie);
console.log(louie.hello());