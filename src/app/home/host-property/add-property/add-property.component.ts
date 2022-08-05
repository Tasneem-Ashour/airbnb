import { Component, Inject, inject, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { Category } from 'src/app/_models/category';
import { Cities } from 'src/app/_models/cities';
import { Countries } from 'src/app/_models/countries';
import { Currencies } from 'src/app/_models/currencies';
import { HostProperties } from 'src/app/_models/host-properties';
import { PropertyTypes } from 'src/app/_models/property-types';
import { RoomType } from 'src/app/_models/room-type';
import { SubCategory } from 'src/app/_models/sub-category';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  constructor(
    public hostService: HostService,
    private FormBulider: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editProperty: any,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    private dialogRef: MatDialogRef<AddPropertyComponent>
  ) {
    console.log('tasneem2', editProperty);
  }

  propertyForm = new FormGroup({
    PropertyName: new FormControl('', Validators.required),
    PropertyDescription: new FormControl('', Validators.required),
    PropertyType: new FormControl('', Validators.required),
    RoomType: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    PlaceLocation: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
    Cuurency: new FormControl('', Validators.required),
    NumberofBedRoom: new FormControl('', Validators.required),
    NumberofBed: new FormControl('', Validators.required),
    NumberofBathroom: new FormControl('', Validators.required),
    NumberofGuest: new FormControl('', Validators.required),
  });
  propType: PropertyTypes[] = [];
  Countries: Countries[] = [];
  Cities: Cities[] = [];
  roomType: RoomType[] = [];
  category: Category[] = [];
  subCategory: SubCategory[] = [];
  curency: Currencies[] = [];
  // oject from hostProp to send it to API/////////////
  newProp = new HostProperties();

  selectedCountry = '';
  selectedCity = '';

  ngOnInit(): void {
    if (this.editProperty) {
      this.newProp=this.editProperty;
     
    }

    this.getAllCountries();
    this.getAllCities();
    this.getPropType();
    this.getRoomType();
    this.getPropCategory();
    this.getCarency();
    this.getSubCategory();
  }
  getAllCountries() {
    this.hostService.getContries().subscribe((country) => {
      this.Countries = country;
      console.log(this.Countries);
    });
  }
  getAllCities() {
    this.hostService.getCities().subscribe((city) => {
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
  getSubCategory() {
    this.hostService.getAllSubCategory().subscribe((sub) => {
      this.subCategory = sub;
    });
  }
  getCarency() {
    this.hostService.getCurrencies().subscribe((c) => {
      this.curency = c;
    });
  }

  //getting Data from user ////////////////////
  getProPTypeID(propTypeID: any) {
    this.newProp.propertyTypeId = propTypeID;
  }
  getRoomTypeId(roomTypeId: any) {
    this.newProp.roomTypeId = roomTypeId;
  }
  getCatID(categoryId: any) {
    this.newProp.categoryId = categoryId;
  }
  // getSubCatId(subId: any) {
  //   this.newProp.subcategoryId = subId;
  //   this.newProp.subcategoryId;
  // }
  getCountryId(country: any) {
    this.newProp.countryId = country;
  }
  getCityId(c: any) {
    this.newProp.cityId = c;
  }
  getCurencyId(cu: any) {
    this.newProp.currencyId = cu;
  }
  addNewProperty() {
    this.hostService.AddProperty(this.newProp).subscribe((prop) => {});
    console.log(this.newProp);
    this.hostService.getAllProperties().subscribe((f) => {
      console.log(f);
    });
  }

  testData() {
    console.log(this.propertyForm.value);
    if (this.propertyForm.valid) {
      this.hostService.AddProperty(this.newProp).subscribe({
        next: (res) => {
          alert('product added successfully');
          this.propertyForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert('Error while adding the property');
        },
      });
    }
  }
}
