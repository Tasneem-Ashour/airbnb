import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Countries } from '../_models/countries';
import { ICountries } from '../_models/ICountries';

@Injectable({
  providedIn: 'root'
})
export class HostService {
// co:ICountries[]=[]

  constructor(public http:HttpClient) { }
getContries():Observable<Countries[]>{
  return this.http.get<Countries[]>(`${environment.APIURL}/ArCountries/GetAll`)
}


}
