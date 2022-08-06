import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vacation';
  hah = true;
  old = false;
  isTokenIn: boolean = true;
  constructor(public Auth: UserAuthService) {}

  

  ngOnInit(): void {
    this.checkUserLogin();
  }
  reciveBool(bool: any) {
    this.hah = bool;
    this.old = true;
  }
  mainNav(bool: boolean) {
    this.old = false;
    this.hah = true;
  }

  checkUserLogin() {
    var token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    this.Auth.isAuth$.next(true);
  }
}


