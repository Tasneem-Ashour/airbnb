import { Component ,OnInit} from '@angular/core';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'airbnb';
  hah = true;
  old = false;
isTokenIn:boolean=true;
  constructor(public Auth:UserAuthService){}

  ngOnInit(): void {
    this.Auth.isWith$.subscribe({
      next: (isWith) => {
        this.isTokenIn= isWith;
      },
    });
  }
  reciveBool(bool: any) {
    this.hah = bool;
    this.old=true;
  }
  mainNav(bool: boolean) {
    this.old = false;
    this.hah=true;
  }
}
export class Model {
  handleClick() {
    //execute action
  }
get isTokenIn():boolean{
  return (localStorage.getItem("token"))?true:false;
}
 
}
