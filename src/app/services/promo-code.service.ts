import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PromoCode } from '../_models/promo-code';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {

  constructor(public http:HttpClient) { }

  getAllPromoCode():Observable<PromoCode[]>{
    return this.http.get<PromoCode[]>(`${environment.APIURL}/ArPromoCodes/getall`);
  }

  AddPromCode(AddPromCode:PromoCode){
    return this.http.post<PromoCode>(`${environment.APIURL}/ArPromoCodes`,AddPromCode);
  }

  updatePromCode(updatePromCode:PromoCode){
    return this.http.put<PromoCode>(`${environment.APIURL}/ArPromoCodes/update/${updatePromCode.id}`,updatePromCode);
  }

  deletePromCode(deletePromCode:PromoCode){
    return this.http.put<PromoCode>(`${environment.APIURL}/ArPromoCodes/delete/${deletePromCode.id}`,deletePromCode);
  }
}
