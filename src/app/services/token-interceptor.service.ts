import { Injectable , Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService= this.injector.get(UserAuthService);
    let tokenRequset = req.clone({
      setHeaders:{
        Authrization:`Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenRequset);
  }
}
