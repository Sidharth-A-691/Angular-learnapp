import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  products:Product[]=[];
  product:Product=new Product(1,"","",0,0);

  constructor(private service:DataService) { }

  ngOnInit():void {
    this.fetchAllProducts();
    this .delete();
    this .modify();
    }

    fetchAllProducts():void
    {
      this.service
      .fetchAllProducts()
      .subscribe((data)=>{
      this.products = data;
      });
    }

    addProduct():void{
      this.service
      .addProduct(new Product(101,'Laptop','Dell',10,75000))
      .subscribe((data)=>{
      this.product = data;
      });
    }

    delete():void{
      this.service
      .deleteProduct(7)
      .subscribe((data)=>{
      this.product = data;
      });
    }
    modify():void
    {
      this.service
      .modifyProduct(new Product(6,'Laptop','Dell',10,75000))
      .subscribe((data)=>{
      this.product = data;
      });
    }
  }