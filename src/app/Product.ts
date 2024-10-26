 export class Product {
    id: any;
    description: string;
    brand: string;
    price: number;
    qty: number;

constructor (id: any, description: string, brand: string, price: number, qty: number)
{
    this.id = id;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.qty = qty;
}
}