class Animal {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`Animal ${this.name} says`);
  }
}

class Cat extends Animal {
  constructor(name, s) {
    super(name);
    this.s = s;
  }
  sayM() {
    console.log(`${this.name} says: "${this.s}"`)
  }
}

const cat = new Cat('M', 'Meau');
cat.sayM(); 
