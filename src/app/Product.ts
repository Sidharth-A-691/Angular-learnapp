 export class Product {
    productId: string;
    description: string;
    brand: string;
    price: number;
    qty: number;

constructor (productId: string, description: string, brand: string, price: number, qty: number)
{
    this.productId = productId;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.qty = qty;
}
}