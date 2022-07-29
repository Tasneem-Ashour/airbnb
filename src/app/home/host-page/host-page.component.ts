import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { Countries } from 'src/app/_models/countries';
import { ICountries } from 'src/app/_models/ICountries';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})


export class HostPageComponent  {

constructor(public allCountries:HostService){}
Countries: Countries[]=[];  


selectedCountry='';

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
  

}
