import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { Cities } from 'src/app/_models/cities';
import { Countries } from 'src/app/_models/countries';
import { HostProperties } from 'src/app/_models/host-properties';
import { RoomType } from 'src/app/_models/room-type';



@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})


export class HostPageComponent  {

constructor(public allCountries:HostService ,
  public allCities:HostService ,
  public roomType:HostService,
  public hostProperty:HostService){}
Countries: Countries[]=[];  
Cities:Cities[]=[];
Room:RoomType[]=[];
hostProp:HostProperties[]=[];



selectedCountry='';
selectedCity='';

  ngOnInit(): void {
  }

  scroll(e1:HTMLElement){
    e1.scrollIntoView();
  }



  saveData(){}


  getAllPropirty(){
    this.hostProperty.getAllProperties().subscribe(
      (req)=>{
        this.hostProp=req
      }
    );

  }

  getAllCountries(){
    this.allCountries.getContries().subscribe(
      (country)=>{
        this.Countries=country
      }
    );
  }

  getAllCities(){
    this.allCities.getCities().subscribe(
      (city)=>{this.Cities=city}
    );
  }

  getRoomType(){
this.roomType.getRoomType().subscribe(
  (req)=>{this.Room=req}
);
  }
  

}
