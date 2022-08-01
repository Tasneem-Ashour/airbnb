import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UserPageService } from 'src/app/services/user-page.service';
import { Category } from 'src/app/_models/category';
import { HostProperties } from 'src/app/_models/host-properties';
import { Iprofile } from 'src/app/_models/iprofile';
import { PropertyTypes } from 'src/app/_models/property-types';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css'],
})
export class HostProfileComponent implements OnInit {
  constructor(
    public HostProperty: HostService,
    public userName: ProfileService,
    public property:HostService,
    public propertyT:HostService,
    public Category:HostService

  ) {}

  hostProp: HostProperties[] = [];
  HostName: Iprofile | null = null;
  geniralProperty:HostProperties[]=[];
  properyType:PropertyTypes[]=[];
  hostCategory:Category[]=[];

  ngOnInit(): void {
    this.HostPropertyById();
    this.hostName();
  }

  HostPropertyById() {
    this.HostProperty.getPropertiesByHostId().subscribe(
      (req) => (
         this.geniralProperty = req
        )
    );
  }

  hostName(){
    this.userName.getUserData().subscribe(
      (req)=>{this.HostName=req}
    );
  }

 

  getPropertyType(){
    this.propertyT.getAllPropertyType().subscribe((req)=>this.properyType=req);
  }

  getCategory(){
    this.Category.getAllCategory().subscribe((req)=>this.hostCategory=req);
  }
}
