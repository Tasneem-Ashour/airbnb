import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm = new FormGroup({
    location: new FormControl<string | null>(null, [Validators.required]),
    guests: new FormControl<number | null>(2, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
    arrival: new FormControl<Date | null>(null, [Validators.required]),
    departure: new FormControl<Date | null>(null, [Validators.required]),
  });
 
  constructor() {
    this.bookingForm.controls.guests.hasError;
  }
 
  ngOnInit(): void {}
 
  increase() {
    let oldValue = this.bookingForm.controls.guests.value ?? 0;
    if (oldValue === 20) return;
    this.bookingForm.patchValue({ guests: +oldValue + 1 });
  }
 
  decrease() {
    let oldValue = this.bookingForm.controls.guests.value ?? 0;
    if (oldValue === 1) return;
    this.bookingForm.patchValue({ guests: +oldValue - 1 });
  }
 
  bookNow(){
    console.log(this.bookingForm.value)
  }
}
 

