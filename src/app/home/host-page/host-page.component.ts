import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HostService } from 'src/app/services/host.service';
import { PropertyImagesService } from 'src/app/services/property-images.service';
import { Category } from 'src/app/_models/category';
import { Cities } from 'src/app/_models/cities';
import { Countries } from 'src/app/_models/countries';
import { Currencies } from 'src/app/_models/currencies';
import { HostProperties } from 'src/app/_models/host-properties';
import { PropertyTypes } from 'src/app/_models/property-types';
import { RoomType } from 'src/app/_models/room-type';
import { SubCategory } from 'src/app/_models/sub-category';

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css'],
})
export class HostPageComponent {

  form = new FormGroup({
    uploadImage: new FormControl<string>('', [Validators.required]),
  });

  constructor(public hostService: HostService , public img: PropertyImagesService) {}
  propType: PropertyTypes[] = [];
  Countries: Countries[] = [];
  Cities: Cities[] = [];
  roomType: RoomType[] = [];
  category: Category[] = [];
  // subCategory:SubCategory[]=[];
  curency: Currencies[] = [];
    // oject from hostProp to send it to API/////////////
    newProp = new HostProperties();



    status = '';

  selectedCountry = '';
  selectedCity = '';

  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCities();
    this.getPropType();
    this.getRoomType();
    this.getPropCategory();
    this.getCarency();
    // this.getSubCategory();
  }

  getAllCountries() {
    this.hostService.getContries().subscribe((country) => {
      this.Countries = country;
      console.log(this.Countries);
    });
  }
  getAllCities() {
    this.hostService.getCityByContryId(this.newProp.countryId).subscribe((city) => {
      this.Cities = city;
    });
  }
  getPropType() {
    this.hostService.getAllPropertyType().subscribe((req) => {
      this.propType = req;
      console.log(req);
    });
  }
  getRoomType() {
    this.hostService.getRoomType().subscribe((type) => {
      this.roomType = type;
    });
  }
  getPropCategory() {
    this.hostService.getAllCategory().subscribe((cat) => {
      this.category = cat;
    });
  }

  getCarency() {
    this.hostService.getCurrencies().subscribe((c) => {
      this.curency = c;
    });
  }


  //getting Data from user ////////////////////
  getProPTypeID(propTypeID:any){
    this.newProp.propertyTypeId=propTypeID;
     }
  getRoomTypeId(roomTypeId:any){
   this.newProp.roomTypeId=roomTypeId;

  }
  getCatID(categoryId:any){
    this.newProp.categoryId=categoryId;


    }
  // getSubCatId(subId:any){
  //   this.newProp.subcategoryId=subId
  //   this.newProp.subcategoryId
  // }
  getCountryId(country: any) {
    this.newProp.countryId = country;
    this.getAllCities();
  }
  getCityId(c:any){
    this.newProp.cityId=c
 }
 getCurencyId(cu:any){
  this.newProp.currencyId=cu
 }
 addNewProperty(){
  this.newProp.url = this.form.value.uploadImage ?? '';
  this.hostService.AddProperty(this.newProp).subscribe((prop)=>{
    // this.hostService.test=66;
    // alert(this.hostService.test)
    // console.log(this.newProp)
    this.newProp=prop;
  })
  // this.hostService.test=66;
  // alert(this.hostService.test)
  // console.log(this.newProp)

 }

 uploadPhoto(target:EventTarget|null){
  if(!target) return;
  var input=target as HTMLInputElement;
  if(!input.files) return;
  this.status ='image uploading started';
  this.img.uploadPropertyImage(input.files[0]).subscribe({
    next:(res)=>{
console.log(res.url);
this.form.patchValue({uploadImage:res.url});
this.status='image uploaded successfully';
    },
    error:()=>{
      this.status='Try again';
    }
 });
 }

}
