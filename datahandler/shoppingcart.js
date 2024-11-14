

class shoppingcart {
    
    static{
        this._Counter=0;
    }

    static get Counter(){
        return this._Counter;
    }

    constructor(id, name, unitprice, quantity) {
        this.id = id;
        this.name = name;
        this.unitprice = unitprice;
        this.quantity = quantity;
        shoppingcart._Counter++;
    }

    gettotal() {
        total = this.unitprice * this.quantity;
    }
}

class DataHandler {
    constructor() {
        this.name = [

        ]
    }
}