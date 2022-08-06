import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { BookingService } from 'src/app/services/booking.service';
import { HostService } from 'src/app/services/host.service';
import { HostProperties } from 'src/app/_models/host-properties';
import { PropetyById } from 'src/app/_models/propety-by-id';


@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent  {

  constructor(public confirmBooking:BookingService , public ar:ActivatedRoute,public property:HostService) { }
  HostProp =new PropetyById();


  ngOnInit() {
    console.log(this.confirmBooking.book)
    this.ar.params.subscribe((a)=>{
      this.property.geWithAllData(a['id']).subscribe((req)=>{
        this.HostProp=req;
      })
    })
  }

  
  // getBookingDetails(book:any){

  // }
}
