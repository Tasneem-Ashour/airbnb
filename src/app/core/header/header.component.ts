import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mainNav = true;
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  ShowNewNav() {
    this.mainNav = false;
    this.clickEvent.emit(this.mainNav);
  }
}
