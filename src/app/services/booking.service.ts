import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Booking } from '../_models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public http:HttpClient) { }

  //admin only
  getAllBooking():Observable<Booking[]>{
    return this.http.get<Booking[]>(`${environment.APIURL}/ArBookings`);
  }

  
  AddBooking(AddBooking:Booking){
    return this.http.post<Booking>(`${environment.APIURL}/ArBookings`,AddBooking);
  }

  updateBooking(updateBooking:Booking){
    return this.http.put<Booking>(`${environment.APIURL}/ArBookings/${updateBooking.id}`,updateBooking);
  }

  deleteBooking(deleteBooking:Booking){
    return this.http.put<Booking>(`${environment.APIURL}/ArBookings/delete/${deleteBooking.id}`,deleteBooking);
  }
}
