import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Iprofile } from 'src/app/_models/iprofile';
import { Password } from 'src/app/_models/password';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css'],
})
export class UserEditProfileComponent implements OnInit {
  openPasswordPage: boolean = false;
  constructor(public proSer: ProfileService,public router:Router) {}
  updateProfile:Iprofile = new Iprofile("","","",new Date(),",","","");
  changePassword:Password=new Password("","");
  upProfile=new FormGroup({email:new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    facebookId: new FormControl(''),
    twitterId: new FormControl(''),
    about:new FormControl('')

  })
  upPass=new FormGroup({
    oldPassword:new FormControl(''),
    newPassword:new FormControl('')
  })

  load() {
    this.proSer.getUserData().subscribe((a) => {
      this.updateProfile = a;
    });
  }

  ngOnInit(): void {
    this.load();
    console.log(this.updateProfile.email)
    console.log("this.updateProfile.email")
  }
  chagnePassword() {
    this.openPasswordPage = true;
  }

  account() {
    this.openPasswordPage = false;
  }
  update(){
    console.log(this.updateProfile)
    this.proSer.updateUserProfile(this.updateProfile).subscribe(a=>{console.log(a)});
    this.router.navigateByUrl("/profile")
  }
  changePass(){
    this.proSer.changeUserPassword(this.changePassword).subscribe(p=>{console.log(p)});
    this.router.navigateByUrl("/profile")

  }
}
