// data.service.ts
import { Injectable } from '@angular/core';  
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [];

  constructor() {
    this.products.push(new Product('s1021', 'Tata', 'Dish TV', 2500, 10));
    this.products.push(new Product('K3023', 'Wipro', 'Blubs', 300, 210));
    this.products.push(new Product('mp3421', 'TVS', 'Belts', 5500, 210));
    this.products.push(new Product('tg021', 'Reliance', 'Dish TV', 4500, 50));
    this.products.push(new Product('po432', 'ActFiber', 'Router', 1400, 60));
    this.products.push(new Product('ji909', 'Samsung', 'Smart TV', 72500, 50));
    this.products.push(new Product('bs654', 'LG', 'Air Conditioners', 52500, 20));
    this.products.push(new Product('vh675', 'Crompton', 'Ceiling Fans', 1500, 25));
    this.products.push(new Product('h2901', 'Carrier', 'Air Conditioners', 50500, 5));
    this.products.push(new Product('yu721', 'Usha', 'Table fans', 1200, 40));
    this.products.push(new Product('re454', 'One+', 'Mobiles', 82500, 50));
  }

  getProducts(): Product[] {
    return this.products;
  }
}
