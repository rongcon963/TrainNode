import {addFuelToRocket, createProduct, allowlistOnly} from './Decorator'
  
// @sealed
@addFuelToRocket
export class Product {
    type = "report";
    title: string;
    @allowlistOnly
    name: string = "Jon";
    password: string;
 
    constructor(t: string,name:string, password: string) {
        this.title = t;
        this.name = name;
        this.password = password;
    }

    @createProduct(false)
    create () {
        return "Launching in 3... 2... 1... 🚀";
    }
}