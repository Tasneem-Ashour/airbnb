import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-edit-page',
  templateUrl: './host-edit-page.component.html',
  styleUrls: ['./host-edit-page.component.css'],
})
export class HostEditPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  xxx: any;
  // first next
  myfun() {
    var x = document.getElementsByClassName('first');
    var xx = document.getElementsByClassName('sec');
    Array.prototype.forEach.call(x, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });
    Array.prototype.forEach.call(xx, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });

    this.xxx = document.querySelector('.bk');
    // alert(this.xxx.innerHTML);

    if (this.xxx.innerHTML == 'What Kind of place will you host?') {
      this.xxx.innerHTML = 'What kind of space will guests have?';
    } else {
      this.xxx.innerHTML = 'What Kind of place will you host?';
    }
  }
  // sec next
  myfun2() {
    var x = document.getElementsByClassName('sec');
    Array.prototype.forEach.call(x, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });
    var xx = document.getElementsByClassName('th');
    Array.prototype.forEach.call(xx, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });

    this.xxx = document.querySelector('.bk');
    // this.xxx.innerHTML = 'Which of these best describes your place ?';
    if (this.xxx.innerHTML == 'What kind of space will guests have?') {
      this.xxx.innerHTML = 'Which of these best describes your place ?';
    } else {
      this.xxx.innerHTML = 'What kind of space will guests have?';
    }
  }
  myfun3() {
    var x = document.getElementsByClassName('th');
    Array.prototype.forEach.call(x, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });
    var xx = document.getElementsByClassName('fr');
    Array.prototype.forEach.call(xx, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });

    this.xxx = document.querySelector('.bk');
    // this.xxx.innerHTML = 'Where is your place located ?';
    // this.xxx.innerHTML = 'Which of these best describes your place ?';
    if (this.xxx.innerHTML == 'Which of these best describes your place ?') {
      this.xxx.innerHTML = 'Where is your place located ?';
    } else {
      this.xxx.innerHTML = 'Which of these best describes your place ?';
    }
  }
  myfun4() {
    var x = document.getElementsByClassName('fr');
    Array.prototype.forEach.call(x, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });
    var xx = document.getElementsByClassName('five');
    Array.prototype.forEach.call(xx, function (el) {
      // Do stuff here
      el.classList.toggle('d-none');
    });

    this.xxx = document.querySelector('.bk');
    this.xxx.innerHTML = 'How many guests would you like to welcome?';
  }
}
