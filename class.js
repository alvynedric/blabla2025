// let vehicle = {
//     name : "Civic",
//     type : "Sedan",
//     price : 1000000,

//     startEngine : function(){
//         console.log("Start Engine");
//     },
//     stopEngine : function(){
//         console.log("Stop Engine");
//         }
// }

class Vehicle {
  constructor(id, name, type, price, isSold) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.isSold = isSold;
  }
}
// instanciation
let civic = new Vehicle(1, "Civic Turbo", "Sedan", 1000000, true);
let hino = new Vehicle(2, "Hino Dutro", "Truck", 500000, false);
let tiger = new Vehicle(3, "Tiger 2000", "motorcycle", 200000, true);

console.log(civic);
console.log(hino);
console.log(tiger);
