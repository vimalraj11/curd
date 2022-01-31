import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

  constructor(private database:ProductservicesService) { }

  products:any=[];

 ngOnInit() {
  
  return this.database.fetchProductListFromRemote().subscribe(
    ( data:any)=>{
      console.log("responce recived ",data)
     this.products=data;
     },
     error=>console.log("exception recoved ")
   )
 }

}
