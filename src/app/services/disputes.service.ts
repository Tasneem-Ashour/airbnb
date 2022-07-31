import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Disputes } from '../_models/disputes';

@Injectable({
  providedIn: 'root'
})
export class DisputesService {

  constructor(public http:HttpClient) { }

  getAllPDisputes():Observable<Disputes[]>{
    return this.http.get<Disputes[]>(`${environment.APIURL}/Ardisputes/getall`);
  }

  
  AddDisputes(AddDisputes:Disputes){
    return this.http.post<Disputes>(`${environment.APIURL}/Ardisputes`,AddDisputes);
  }

  updatePromCode(updateDisputes:Disputes){
    return this.http.put<Disputes>(`${environment.APIURL}/Ardisputes/update/${updateDisputes.id}`,updateDisputes);
  }

  deleteDisputes(deleteDisputes:Disputes){
    return this.http.put<Disputes>(`${environment.APIURL}/Ardisputes/delete/${deleteDisputes.id}`,deleteDisputes);
  }
}
