import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { HostProperties } from 'src/app/_models/host-properties';
import { Iprofile } from 'src/app/_models/iprofile';
import { ProfileService } from 'src/app/services/profile.service';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private ProfileService:ProfileService,public property:HostService,public route:Router, private authservice: UserAuthService,) { }

  prop:HostProperties[]=[];

  ngOnInit(): void {

      this.authservice.isAuth$.subscribe({
        next: (isAuth) => {
          this.isUserLogged = isAuth;
        },
      });
      if(this.isUserLogged){
        this.btntxt="logout"
      }


      this.getAllProp()
    }
    btntxt:string="sign in"


  getAllProp(){
    this.property.getAllProperties().subscribe((req)=>{this.prop=req;
    console.log(req)})
  }
  goToProfile(){
    this.ProfileService.getUserData().subscribe(a=>{
      if(!a.userType){
        this.route.navigateByUrl("/home")
      }else{
        this.route.navigateByUrl("/hostProfile")
      }

    })
  }
  logout() {
    this.authservice.logout();
    localStorage.removeItem("loggedIn")
    // this.ShowNewNav();
    this.btntxt="sign in"
  }
  log(){
    if(!this.isUserLogged){
      this.route.navigateByUrl("/signin")
    }else{
      this.logout()
    }
  }




}
