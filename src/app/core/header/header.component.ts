import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLogged:boolean=false;
  mainNav = true;
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor(private authservice:UserAuthService) {}

  ngOnInit(): void {
    this.authservice.isAuth$.subscribe({next:(isAuth)=>{
      this.isUserLogged=isAuth;
    }});
  }
  ShowNewNav() {
    this.mainNav = false;
    this.clickEvent.emit(this.mainNav);
  }

  logout(){
    this.authservice.logout();
    this.ShowNewNav();
  }


}
