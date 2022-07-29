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
  getUserData():Observable<Iprofile>{
    return this.http.get<Iprofile>(`${environment.APIURL}/arusers/getuser`);
  }

  // update profile info
  updateUserProfile(iprofile:Iprofile){
    return this.http.put(`${environment.APIURL}/ArUsers/Update`,iprofile);
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
