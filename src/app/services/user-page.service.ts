import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ProprtyReviwes } from '../_models/proprty-reviwes';


@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor(public http:HttpClient) { }
  //proprty reviews crud 
  
  getAllPropertyReviews():Observable<ProprtyReviwes[]>{
    return this.http.get<ProprtyReviwes[]>(`${environment.APIURL}/ArPropertyReviews/getall`);
    }

  AddReview(AddReview:ProprtyReviwes){
    return this.http.post<ProprtyReviwes>(`${environment.APIURL}/ArPropertyReviews`,AddReview);
      }  
  updateReviews(updateReviews:ProprtyReviwes){
    return this.http.put<ProprtyReviwes>(`${environment.APIURL}/ArPropertyReviews/update/${updateReviews.id}`,updateReviews);
      }    

   deleteReviews(deleteReviews:ProprtyReviwes){
    return this.http.put<ProprtyReviwes>(`${environment.APIURL}/ArPropertyReviews/delete/${deleteReviews.id}`,deleteReviews);

   }   


   
}

