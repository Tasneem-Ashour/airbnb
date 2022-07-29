import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { Category } from 'src/app/_models/category';
import { Cities } from 'src/app/_models/cities';
import { Countries } from 'src/app/_models/countries';
import { HostProperties } from 'src/app/_models/host-properties';
import { RoomType } from 'src/app/_models/room-type';
import { SubCategory } from 'src/app/_models/sub-category';



@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})


export class HostPageComponent  {

constructor(public allCountries:HostService ,
  public allCities:HostService ,
  public roomType:HostService,
  public hostProperty:HostService,
  public category:HostService,
  public subCategory:HostService
  
  ){}
Countries: Countries[]=[];  
Cities:Cities[]=[];
Room:RoomType[]=[];
hostProp:HostProperties[]=[];
cat:Category[]=[];
sub:SubCategory[]=[];



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

  getAllCategories(){
    this.category.getAllCategory().subscribe(
      (req)=>{
        this.cat=req
      }
    );

  }


  getAllSubCategories(){
    this.subCategory.getAllSubCategory().subscribe(
      (req)=>{
        this.sub=req
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
