import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    const url1 = 'http://localhost:8090/product/api1.0/addProduct'; 
    return this.http.post<Product>(url1, product);
  }

  getProducts(): Observable<Product[]> {
    const url = 'http://localhost:8090/product/api1.0/productsinfo'; 
    return this.http.get<Product[]>(url);
  }
}
