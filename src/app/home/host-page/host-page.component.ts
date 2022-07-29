import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { Cities } from 'src/app/_models/cities';
import { Countries } from 'src/app/_models/countries';



@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})


export class HostPageComponent  {

constructor(public allCountries:HostService ,public allCities:HostService){}
Countries: Countries[]=[];  
Cities:Cities[]=[];



selectedCountry='';
selectedCity='';

  ngOnInit(): void {
  }

  scroll(e1:HTMLElement){
    e1.scrollIntoView();
  }



  saveData(){}

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
  

}
