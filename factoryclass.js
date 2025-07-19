class Fruit {
    constructor(id, name, price, stock, category){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
        this.category = category
    }
}
class Apple extends Fruit {
    constructor(id, name, price, stock){
        super(id, name, price, stock, 'Apple')
    }
}
class Orange extends Fruit {
    constructor(id, name, price, stock){
        super(id, name, price , stock, 'Orange')
    }
}
class Banana extends Fruit {
    constructor(id, name, price, stock){
        super(id, name, price , stock, 'Banana')
    }
}

// Factory Class
class Supermarket {
    constructor(shelves){
        this.shelves = shelves || [];
    }
    showItems(){
        console.log("Supermarket shelves:");
        if(this.shelves >0){
            console.log(this.shelves)
        }else{
            console.log("There is no shelv");
        }
    }
}
const supermarket = new Supermarket();
supermarket.showItems();