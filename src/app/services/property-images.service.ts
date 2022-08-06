import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PropertyImages } from '../_models/property-images';

@Injectable({
  providedIn: 'root'
})
export class PropertyImagesService {

  constructor(public http:HttpClient) {}

    getAllPropertyImage():Observable<PropertyImages[]>{
      return this.http.get<PropertyImages[]>(`${environment.APIURL}/ArPropertyImages`);
    }
  
    
    AddPropertyImage(AddPropertyImage:PropertyImages){
      return this.http.post<PropertyImages>(`${environment.APIURL}/ArPropertyImages`,AddPropertyImage);
    }
  
    uploadPropertyImage(file:File):Observable<PropertyImages>{
      var formData = new FormData();
      formData.append('image',file);
      return this.http.post<PropertyImages>(`${environment.APIURL}/ArPropertyImages/UploadImg`,formData);
    }
  
    deletePropertyImage(deletePropertyImage:PropertyImages){
      return this.http.put<PropertyImages>(`${environment.APIURL}/ArPropertyImages/Delete/${deletePropertyImage.id}`,deletePropertyImage);
    }

 
   }

