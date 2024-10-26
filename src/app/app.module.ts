import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { CardComponent } from './card/card.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CarComponent,
    CardComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
