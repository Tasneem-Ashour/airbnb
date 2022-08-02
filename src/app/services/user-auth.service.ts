import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../_models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private client:HttpClient) { }

  isAuth$=new BehaviorSubject<boolean>(false) ;
  isWith$=new BehaviorSubject<boolean>(true);

  

  login(email:string , password:string) : Observable<any>{
    // let userTocken="";
    // localStorage.setItem("token", userTocken);
    return this.client.post<ILogin>("https://localhost:7038/api/arusers/login",
    {
      email:email ,
      password:password
    }
     );
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
localStorage.removeItem("token");
this.isAuth$.next(false);
this.isWith$.next(false);
  }

  

  get isUserLogged() : boolean{
    return(localStorage.getItem("token"))?true:false;
  }
}
