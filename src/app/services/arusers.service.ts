import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Arusers } from '../_models/arusers';
import { ILogin } from '../_models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class ArusersService {

  // userLogin()
  // {
  //  return this.http.post<ILogin>(`${environment.APIURL}/arusers/login` , '');
  // }
  constructor(public http:HttpClient) { }
}
