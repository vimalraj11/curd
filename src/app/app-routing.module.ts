import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { FlightdataComponent } from './flightdata/flightdata.component';
import { GetproductComponent } from './getproduct/getproduct.component';

const routes: Routes = [
  {
    path:'',component:GetproductComponent
  },
  {
    path:'add',component:AddproductsComponent
  },
  {
    path:'delete',component:DeleteProductComponent
  },
  {
    path:'flightdata',component:FlightdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
