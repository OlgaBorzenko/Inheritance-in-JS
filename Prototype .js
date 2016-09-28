function Animal(name){
  this.name = name;
  this.age = 0;
}

Animal.prototype.eat = function(eat){
  this.eat = eat;
  alert(this.name + ' eats ' + this.eat);
}

Animal.prototype.live = function(live){
  this.live = live;
  alert(this.name + 'lives' + this.live);
}

Animal.prototype.age = function(age){
  this.age = age;
  alert(this.name + 'is' + this.age + 'years old');
}

function Cat(name){
  this.name = name;
  this.age = 0;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function(){
  alert("Meau");
}

var cat = new Cat('M');
console.log(cat.eat('meat'));


var animal = new Animal('dog');
Animal.prototype.run = function(steps){
  console.log(this.name + ' runing ' + steps + " steps");
}
cat.run(5);

Cat.prototype.run = function(steps){
  console.log(this.name + " is lazy to run!")
}
cat.run(5);
animal.run(5);
