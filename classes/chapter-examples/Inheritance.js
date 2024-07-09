// class Felidae {
// 	constructor() {
// 		this.claws = "retractable";
// 	}
// }

// class Panthera extends Felidae {
// 	constructor() {
//     super();
// 		this.roar = "loud";
// 	}
// }

// class Tiger extends Panthera {
// 	constructor() {
//     super();
// 		this.hasStripes = "true";
// 	}
// }

// let tigger = new Tiger();

// console.log(tigger);

class MaidenName {
	constructor(surname){
	  this.surname = "Berra";
	}
  }

class Married extends MaidenName {
	constructor() {
		super();
		this.marriedName = "Politte";
	}
} 

class Offspring extends Married {
	constructor() {
		super();
		this.combination = "true"; 
	}
}
let child = new Offspring;
console.log(child);
  
//   let childOne = new Berra('Anna', 'first', 'Tommy', 2);
//   let childTwo = new Berra('Amy', 'second', 'Andy', 0);
//   let childThree = new Berra('Angie', 'third', 'Mike', 4);


  
