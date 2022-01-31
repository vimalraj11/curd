import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { FlightdataComponent } from './flightdata/flightdata.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    GetproductComponent,
    AddproductsComponent,
    DeleteProductComponent,
    FlightdataComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
