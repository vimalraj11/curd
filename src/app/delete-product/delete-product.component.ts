import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product=new Product();
  constructor(private _service:ProductservicesService,private route:Router) { }

  ngOnInit(): void {
  }
  
  deleteuser(uid: any){
    this._service.deleteuserserv(uid).subscribe(
      data=>{
        console.log("user deleted  ",uid);
        this.route.navigate([''])
    },
      error=>console.log("error")
    )
  }

}
