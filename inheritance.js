class Vehicle {
  constructor(id, name, type, price, isSold) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.isSold = isSold;
  }
}
class Sedan extends Vehicle {
    constructor(id, name, price, isSold) {
        super(id, name, "Sedan", price, isSold);
    }
}
class Truck extends Vehicle {
    constructor(id, name, price, isSold) {
        super(id, name, "Truck", price, isSold);
    }
}
class Motorcycle extends Vehicle {
    constructor(id, name, price, isSold) {
        super(id, name, "Motorcycle", price, isSold);
    }
}
class Sport extends Vehicle {
    constructor(id, name, price, isSold){
        super(id, name, "Sport", price, isSold);
    }
}
// instanciation
let civic = new Sedan(1, "Civic Turbo", 1000000, true);
let hino = new Truck(2, "Hino Dutro", 500000, false);
let tiger = new Motorcycle(3, "Tiger 2000", 200000, true);
let yamahar1m = new Sport(4, "Yamaha R1M", 10000000, true);

console.log(civic);
console.log(hino);
console.log(tiger);
console.log(yamahar1m);
