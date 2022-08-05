import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { share } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Iprofile } from 'src/app/_models/iprofile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  mainNav = true;
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor(
    private authservice: UserAuthService,
    public getemailserv:ProfileService
  ) {}

  ngOnInit(): void {
    this.authservice.isAuth$.subscribe({
      next: (isAuth) => {
        this.isUserLogged = isAuth;
      },
    });
  }
  ShowNewNav() {
    this.mainNav = false;
    this.clickEvent.emit(this.mainNav);
  }

  logout() {
    this.authservice.logout();
    this.ShowNewNav();
  }
  profile: Iprofile | null = null;
  // getdata() {
  //   this.get.getByEmail('ayahkenawy44@gmail.com').subscribe((a) => {
  //     this.profile = a;
  //     console.log(this.profile);
  //   });

  // }
  // getdata() {
  //   this.getemailserv.getByEmail('ayahkenawy44@gmail.com').subscribe((a) => {
  //     this.profile = a;

  //   });
  // }
}
