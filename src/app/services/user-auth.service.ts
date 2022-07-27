import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../_models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private client:HttpClient) { }

  login(email:string , password:string) : Observable<any>{
    // let userTocken="";
    // localStorage.setItem("token", userTocken);
    return this.client.post<ILogin>(`${environment.APIURL}/arusers/login`,
    {
      email:email , 
      password:password
    }
     );
  }

  logout(){
localStorage.removeItem("token");
  }

  get isUserLogged() : boolean{
    return(localStorage.getItem("token"))?true:false;
  }
}
