import { Component, OnInit } from '@angular/core';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-flightdata',
  templateUrl: './flightdata.component.html',
  styleUrls: ['./flightdata.component.css']
})
export class FlightdataComponent implements OnInit {

  constructor(private database:FlightdataService) { }

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
