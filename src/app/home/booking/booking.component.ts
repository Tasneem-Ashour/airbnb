import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { BookingService } from 'src/app/services/booking.service';
import { HostService } from 'src/app/services/host.service';
import { Booking } from 'src/app/_models/booking';
import { PropetyById } from 'src/app/_models/propety-by-id';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {


  constructor(public bookingServices:BookingService , public ar:ActivatedRoute,public property:HostService ) {

  }


    // oject from booking to send it to API/////////////
  newBook=new Booking();
  HostProp =new PropetyById();


  ngOnInit(): void {
    this.ar.params.subscribe((a)=>{
      this.property.geWithAllData(a['id']).subscribe((req)=>{
        this.HostProp=req;
      })
    })

  }
  getRoomNumber(roomNo:any){
   this.newBook.roomsCount=roomNo;

  }
  getAdultsNumber(adultNo:any){
    this.newBook.guestCount=adultNo;

   }
   getChildNumber(childNo:any){
    this.newBook.childrenCount=childNo;

   }
  addNewBook(){
    this.newBook.propertyId=28;
    this.newBook.pricePerStay=5000;
   this.bookingServices.AddBooking(this.newBook).subscribe((book)=>{})
    this.bookingServices.book=this.newBook;
   console.log(this.newBook)
  }


}


