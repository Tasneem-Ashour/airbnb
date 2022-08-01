import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/category';
import { Cities } from '../_models/cities';
import { Countries } from '../_models/countries';
import { Currencies } from '../_models/currencies';
import { HostProperties } from '../_models/host-properties';
import { PropertyTypes } from '../_models/property-types';
import { RoomType } from '../_models/room-type';
import { SubCategory } from '../_models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(public http:HttpClient) { }


  // property curd 

getAllProperties():Observable<HostProperties[]>{
  return this.http.get<HostProperties[]>(`${environment.APIURL}/ArCategories`)
}

getPropeetiesByHostId(HostID:HostProperties):Observable<HostProperties[]>{
  return this.http.get<HostProperties[]>(`${environment.APIURL}/ArProperties/GetWithAllData/${HostID.id}`);
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


//property types

getAllPropertyType():Observable<PropertyTypes[]>{
  return this.http.get<PropertyTypes[]>(`${environment.APIURL}/ArPropertyTypes`);
}

AddPropertyType(AddPropertyType:PropertyTypes){
  return this.http.post<PropertyTypes>(`${environment.APIURL}/ArPropertyTypes`,AddPropertyType);
}


updatePropertyType(updatePropertyType:PropertyTypes){
  return this.http.put(`${environment.APIURL}/ArPropertyTypes/${updatePropertyType.id}`,updatePropertyType);
}

deletePropertyType(deletePropertyType:PropertyTypes){
  return this.http.put(`${environment.APIURL}/ArPropertyTypes/${deletePropertyType.id}`,deletePropertyType);
}







// category crud

getAllCategory():Observable<Category[]>{
  // return this.http.get<Category[]>(`${environment.APIURL}/ArCategories`);
  return this.http.get<Category[]>(`${environment.APIURL}/ArCountries/GetAll`)

}

AddCategory(AddCategory:Category){
  return this.http.post<Category>(`${environment.APIURL}/ArCategories/${AddCategory.id}`,AddCategory);
}

updateCategory(updateCategory:Category){
  return this.http.put<Category>(`${environment.APIURL}/ArCategories/${updateCategory.id}`,updateCategory);
}


deleleCategory(deleleCategory:Category){
  return this.http.put<Category>(`${environment.APIURL}/ArCategories/${deleleCategory.id}`,deleleCategory);
}


// sub Category crud

// getAllSubCategory():Observable<SubCategory[]>{
// <<<<<<< HEAD
//   return this.http.get<SubCategory[]>(`${environment.APIURL}/ArSubcategories`);
// =======
//   return this.http.get<SubCategory[]>(`${environment.APIURL}/ArCountries/GetAll`)
// >>>>>>> parent of 08b9784 (edit host)
// }
  
AddSubCategory(AddSubCategory:SubCategory){
return this.http.post<SubCategory>(`${environment.APIURL}/ArSubcategories`,AddSubCategory);
}

updateSubCategory(updateSubCategory:SubCategory){
  return this.http.put<SubCategory>(`${environment.APIURL}/ArSubcategories/${updateSubCategory.id}`,updateSubCategory);
}
deleteSubCategory(deleleSubCategory:SubCategory){
return this.http.put<SubCategory>(`${environment.APIURL}/ArSubcategories/${deleleSubCategory.id}`,deleleSubCategory);
}


//room crud 

getRoomType():Observable<RoomType[]>{
  return this.http.get<RoomType[]>(`${environment.APIURL}/ArRoomTypes`);
}


AddRoom(AddRoom:RoomType){
  return this.http.post<RoomType>(`${environment.APIURL}/ArRoomTypes`,AddRoom);
}

//only for admin 

updateRoom(updateRoom:RoomType){
  return this.http.put<RoomType>(`${environment.APIURL}/ArRoomTypes${updateRoom.id}`,updateRoom);
}

//only for admin
deleteRoom(deleteRoom:RoomType){
  return this.http.delete<RoomType>(`${environment.APIURL}/ArRoomTypes${deleteRoom.id}`);
}

getContries():Observable<Countries[]>{
  return this.http.get<Countries[]>(`${environment.APIURL}/ArCountries/GetAll`)
}

getCities():Observable<Cities[]>{
  return this.http.get<Cities[]>(`${environment.APIURL}/ArCities/GetAll`)
}

getCurrencies():Observable<Currencies[]>{
  return this.http.get<Currencies[]>(`${environment.APIURL}/ArCurrencies`)
}

}
