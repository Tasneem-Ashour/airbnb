import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iprofile } from '../_models/iprofile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public http:HttpClient) { }
  getByEmail(email:string):Observable<Iprofile>{
    return this.http.get<Iprofile>(`${environment.APIURL}/arusers/getbyemail/${email}`)
  }
  // export class UserprofileService {

  //   constructor(public http:HttpClient,private getemailserv:UserprofileService) { }
  //   getByEmail(email:string):Observable<Iprofile>{

  //     return this.http.get<Iprofile>(`${environment.APIURL}/arusers/getbyemail/${email}`);
  //   }
    // getdata(){
    //   this.getemailserv.getByEmail("ayahkenawy44@gmail.com").subscribe(a=>{console.log(a)});

    //   }

}
