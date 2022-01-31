import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightdataService {

  constructor(private _http:HttpClient) { }
  //flight data
  fetchProductListFromRemote():Observable<any>{
    return  this._http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
   }
}
