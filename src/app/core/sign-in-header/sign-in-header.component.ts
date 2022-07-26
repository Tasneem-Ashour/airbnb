import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-in-header',
  templateUrl: './sign-in-header.component.html',
  styleUrls: ['./sign-in-header.component.css']
})
export class SignInHeaderComponent implements OnInit {
  @Output() back = new EventEmitter<boolean>();
  old:boolean=true;
  mainNav(){
      this.old = false;
    this.back.emit(this.old);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
