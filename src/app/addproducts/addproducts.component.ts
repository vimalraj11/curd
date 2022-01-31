import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductservicesService } from '../productservices.service';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  product=new Product()
  constructor(private _route:Router,private service:ProductservicesService) { }   

  ngOnInit(): void {
  }

  adduserformsubmit(){
    this.service.addproductToRemote(this.product).subscribe(
      data=>{
        console.log("data added ");
        this._route.navigate([''])
    },
      error=>console.log("error")
    )
  }
  gotolist(){
    console.log("working clicking in add component ")
  }

}
