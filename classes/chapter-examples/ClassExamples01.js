//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
   astronautInfo () {
    let info = `${this.name} is ${this.age} years old and weighs ${this.mass} kg.`;
    return info;
   }
}

class Berra {
  constructor(name, birthOrder, spouse, numOfChildren){
    this.name = name;
    this.birthOrder = birthOrder;
    this.spouse = spouse;
    this.numOfChildren = numOfChildren;
  }
  listFamily() {
    let familyInfo = `${this.name} is the ${this.birthOrder} child of Frank and Judy.  ${this.name} is married to ${this.spouse} and together, they have ${this.numOfChildren} children.`;
    return familyInfo;  
  }
}
let childOne = new Berra('Anna', 'first', 'Tommy', 2);
let childTwo = new Berra('Amy', 'second', 'Andy', 0);
let childThree = new Berra('Angie', 'third', 'Mike', 4);

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);
console.log(fox.astronautInfo());
console.log(childOne.listFamily());
console.log(childTwo.listFamily());
console.log(childThree.listFamily());
//Try modifying or adding properties below.