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
        if(this.shelves.length >0){
            this.shelves.forEach((shelf)=> {
                // destructuring object
                const {id, name, price, stock, category} = shelf;
                console.log(`${id}. Name: ${name}, Price: Rp.${price} Stock : ${stock} pcs. Category: ${category}`);
                
            })
            console.log("==================") 
        }else{
            console.log("There is no shelv");
        }
    }
    // CARA MENAMPILKAN DALAM TABEL
    showItemsinTable(){
        console.table(this.shelves)
    }
    addItems(name, price, stock, category){
        let id;
        if(this.shelves.length === 0){
            id = 1;
        }else{
            let lastIndex = this.shelves.length - 1;
            id = this.shelves.length + 1;;
        }
        switch (category) {
            case 'Apple':
                this.shelves.push(new Apple (id,name,price,stock));
                break;
            case 'Orange':
                this.shelves.push(new Orange(id,name,price,stock));
                break;
            case 'Banana':
                this.shelves.push(new Banana(id,name,price,stock));
        }
    }
    deleteItem(id) {
        this.shelves = this.shelves.filter((shelf) => shelf.id !== id);
    }
    editItem(id, name, price, stock){
        this.shelves = this.shelves.map((shelf) => {
            if(shelf.id === id){
                shelf.name = name
                shelf.price= price
                shelf.stock = stock
            }
            return shelf;
        })
    }
}
const supermarket = new Supermarket();
supermarket.addItems("Apple bau", 10000, 100, 'Apple');
supermarket.addItems("pisang goreng", 10000, 100, 'Banana');
supermarket.addItems("Jeruk Limau", 10000, 100, 'Orange');
supermarket.addItems("Apple Royal", 10000, 100, 'Apple');
supermarket.addItems("Pisang Basi", 10000, 100, 'Banana');
supermarket.deleteItem(2);
supermarket.deleteItem(4);
supermarket.editItem(1, "Apple Gala Royal", 150000, 56); // Edit Item
supermarket.showItems();
// supermarket.showItemsinTable(); // Hasilnya menjadi table
