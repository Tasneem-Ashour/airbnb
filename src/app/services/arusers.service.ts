import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arusers } from '../_models/arusers';

@Injectable({
  providedIn: 'root'
})
export class ArusersService {

  userLogin(){
    this.http.post<Arusers[]>("https://localhost:7038/api/arusers/login" , '').subscribe(a=>{console.log(a)})

  }
  constructor(public http:HttpClient) { }
}
