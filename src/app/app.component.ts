import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'airbnb';
  hah = true;
  old = false;

  reciveBool(bool: any) {
    this.hah = bool;
    this.old=true;
  }
  mainNav(bool: boolean) {
    this.old = false;
    this.hah=true;
  }
}
export class Model {
  handleClick() {
    //execute action
  }
}
