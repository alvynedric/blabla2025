class Cookie {
    constructor(id, name, price, ingredients, type){
        this.id = id
        this.name = name
        this.price = price
        this.ingredients = ingredients
        this.type = type
        
    }
}
// Inheritance
class Chocolate extends Cookie {
    constructor(id, name, price, ingredients, isSweet){
        super(id, name, price, ingredients, "Chocolate")
        this.isSweet = isSweet
    }
}
class Sweet extends Cookie {
    constructor(id, name, price, ingredients, isSweet){
        super(id, name, price, ingredients, "Sweet")
        this.isSweet = isSweet
    }
}
class Strawberry extends Cookie {
    constructor(id, name, price, ingredients, isSweet){
        super(id, name, price, ingredients, "Strawberry")
        this.isSweet = isSweet;
    }
}
// Factory CLass
class Kitchen {
    constructor(shelves){
        this.shelves = shelves || []
    }
    showItems(){
        console.log("Kitchen Shelves:")
        if(this.shelves.length >0){
            this.shelves.forEach((shelf)=> {
                // destructuring object
                const {id,name,price,ingredients,type}= shelf;
                console.log(`${id}. Name: ${name}, Price: ${price}, Ingredients ${ingredients}, Type: ${type}, isSweet: ${isSweet}`)
            });
            console.log("==================================")
        }else{
            console.log("There is no items on the shelves")
        }
    }
    addItems(name,price,ingredients,type,isSweet){
        let id;
        if(this.shelves.length === 0){
            id = 1;
        }else{
            let lastIndex = this.shelves.length - 1;
            id = this.shelves.length + 1;
        }
        switch(type){
            case 'Chocolate':
                this.shelves.push(new Chocolate(id,name,price,ingredients,isSweet))
                break;
            case 'Sweet':
                this.shelves.push(new Sweet(id,name,price,ingredients,isSweet))
                break;
            case 'Strawberry':
                this.shelves.push(new Strawberry(id,name,price,ingredients,isSweet))
                break;
        }
    }
}
const kitchen = new Kitchen();
kitchen.addItems("Silverqueen", 15000, "susu",'Chocolate' ,true)
kitchen.showItems()