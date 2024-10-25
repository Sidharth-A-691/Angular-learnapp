import { Component } from '@angular/core';

interface Product {
    productId: number;
    description: string;
    brand: string;
    price: number;
    availableQty: number;
}

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent {
    productId: number = 123;
    description: string = 'This is a product description.';
    brand: string = 'Iphone 16 Pro Max';
    price: number = 100000;
    isAvailable: boolean = true;
    orderQty: number = 0;
    isMember: boolean = true;
    availableQty: number = 100;
    freeShipping: boolean = true; 

    products: Product[] = [
        { productId: 1, description: '15 Pro Max', brand: 'Apple', price: 20000, availableQty: 100 },
        { productId: 2, description: 'Fold 3', brand: 'Samsung', price: 10000, availableQty: 200 },
        { productId: 3, description: 'Foldable', brand: 'BlackBerry', price: 5000, availableQty: 300 },
        { productId: 4, description: 'Tablet', brand: 'OnePlus', price: 40000, availableQty: 400 },
        { productId: 5, description: 'Triple Fold', brand: 'Xaomi', price: 50000, availableQty: 500 }
    ];

    public placeOrder(): void {
        if (this.orderQty > this.availableQty) {
            console.log('Not enough stock');
        } else {
            console.log('Order placed successfully!', this.orderQty);
            this.availableQty -= this.orderQty; 
        }
    }

    public placeOrder1(product: Product): void {
        if (product.availableQty > 0) {
            alert(`Order placed for: ${product.description}`);
            product.availableQty--;
        } else {
            alert('This product is out of stock.');
        }
    }
}
