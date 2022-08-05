import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { HostProperties } from 'src/app/_models/host-properties';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public property:HostService) { }

  prop:HostProperties[]=[];

  ngOnInit(): void {

    this.getAllProp()
  }


  getAllProp(){
    this.property.getAllProperties().subscribe((req)=>{this.prop=req;
    console.log(req)})
  }




}
