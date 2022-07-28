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
  constructor(public getemailserv:ProfileService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // getdata(){
  //   this.ar.params.subscribe(a=>{this.getemailserv.getByEmail(a['email']).subscribe(q=>{this.profile=q;})})

  //   }
    getdataa() {
      this.getemailserv.getByEmail('ayahkenawy44@gmail.com').subscribe((a) => {
        this.profile = a;
        
      });
    }

}
