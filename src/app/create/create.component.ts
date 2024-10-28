import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = new Product(0, '', '', 0, 0);
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  onSubmit(): void {
    this.productService.addProduct(this.product).subscribe((newProduct: Product) => {
      this.products.push(newProduct); 
      this.product = new Product(0, '', '', 0, 0);
    });
  }
}
