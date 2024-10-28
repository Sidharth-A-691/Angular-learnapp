import { Component } from '@angular/core';
import { Product } from '../Product';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {

  //product? = new Product('','','',0,0); 

  constructor(private formBuilder: FormBuilder) { }

  productForm = this.formBuilder.group({
    productId: [, [Validators.required, Validators.minLength(1)]],
    brand: [''],
    description: this.formBuilder.group({
      age:[0],
      seasons: [''],
    }),
    price: [0],
    qty: [0],
    suppliers: this.formBuilder.array([this.formBuilder.control('')]),
});

onSubmit() {
  console.log(this.productForm);
  console.log(this.productForm.value);
  console.log(this.productForm.controls['productId'].value);
  console.log(this.productForm.controls['brand'].value);
  console.log(this.productForm.controls['description'].controls['age'].value);
  console.log(this.productForm.controls['suppliers'].controls[0].value);
}

get suppliers() {
  return this.productForm.get('suppliers') as FormArray;
}

addNewSupplier() {
  console.log(this.suppliers);
  this.suppliers.push(this.formBuilder.control(''));
}
}
