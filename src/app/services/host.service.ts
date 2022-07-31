import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/category';
import { Cities } from '../_models/cities';
import { Countries } from '../_models/countries';
import { HostProperties } from '../_models/host-properties';
import { RoomType } from '../_models/room-type';
import { SubCategory } from '../_models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(public http:HttpClient) { }


  // property curd 

getAllProperties():Observable<HostProperties[]>{
  return this.http.get<HostProperties[]>(`${environment.APIURL}/ArProperties/GetAll`)
}

AddProperty(AddProprty:HostProperties){
  return this.http.post<HostProperties>(`${environment.APIURL}/ArProperties`,AddProprty);
}


updateProperty(updateProprty:HostProperties){
  return this.http.put(`${environment.APIURL}/ArProperties/update/${updateProprty.id}`,updateProprty);
}

deleteProperty(deleteProprty:HostProperties){
  return this.http.put(`${environment.APIURL}/ArProperties/delete/${deleteProprty.id}`,deleteProprty);
}


// category crud

getAllCategory():Observable<Category[]>{
  return this.http.get<Category[]>(`${environment.APIURL}/ArCategories`)
}

AddCategory(AddCategory:Category){
  return this.http.post<Category>(`${environment.APIURL}/ArCategories/${AddCategory.id}`,AddCategory)
}

updateCategory(updateCategory:Category){
  return this.http.put<Category>(`${environment.APIURL}/ArCategories/${updateCategory.id}`,updateCategory)
}


deleleCategory(deleleCategory:Category){
  return this.http.delete<Category>(`${environment.APIURL}/ArCategories/${deleleCategory.id}`)
}


// sub Category crud

getAllSubCategory():Observable<SubCategory[]>{
  return this.http.get<SubCategory[]>(`${environment.APIURL}/ArSubcategories`)
}
  
getContries():Observable<Countries[]>{
  return this.http.get<Countries[]>(`${environment.APIURL}/ArCountries/GetAll`)
}

getCities():Observable<Cities[]>{
  return this.http.get<Cities[]>(`${environment.APIURL}/ArCities/GetAll`)
}

getRoomType():Observable<RoomType[]>{
  return this.http.get<RoomType[]>(`${environment.APIURL}/ArRoomTypes`)
}


}
