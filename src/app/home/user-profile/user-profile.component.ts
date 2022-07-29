import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Iprofile } from 'src/app/_models/iprofile';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:Iprofile|null=null;
  constructor(public userData:ProfileService,public ar:ActivatedRoute) { }

  ngOnInit(): void {this.getdataa()
  }

  // getdata(){
  //   this.ar.params.subscribe(a=>{this.getemailserv.getByEmail(a['email']).subscribe(q=>{this.profile=q;})})

  //   }
    getdataa() {
      this.userData.getUserData().subscribe((a)=>{this.profile=a});
      // .subscribe((a) => {
      //   this.profile = a;

      // });
    }
    onUpdateClicked(){
      let currentProfile=this.profile;
      console.log(currentProfile);
    }

}
