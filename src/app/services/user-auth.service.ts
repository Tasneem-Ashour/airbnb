import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private client:HttpClient) { }

  login(Email:string , password:string) : Observable<any>{
    let userTocken="";
    localStorage.setItem("token", userTocken);
    return this.client.post(`${environment.APIURL}/aruser/login`,{username:Email , password:password} )
  }

  logout(){
localStorage.removeItem("token");
  }

  get isUserLogged() : boolean{
    return(localStorage.getItem("token"))?true:false;
  }
}
