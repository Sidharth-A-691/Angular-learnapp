import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { CardComponent } from './card/card.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
//import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CarComponent,
    CardComponent,
    HttpComponent,
    ReactiveComponent,
    CreateComponent,
    FormbuilderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
