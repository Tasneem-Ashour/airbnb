import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent  {

  constructor(public confirmBooking:BookingService) { }



  ngOnInit() {
    console.log(this.confirmBooking.book)

  }
  // getBookingDetails(book:any){

  // }
}
