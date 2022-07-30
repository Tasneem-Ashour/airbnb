import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-in-header',
  templateUrl: './sign-in-header.component.html',
  styleUrls: ['./sign-in-header.component.css']
})
export class SignInHeaderComponent implements OnInit {
  
  old:boolean=true;
  @Output() back = new EventEmitter<boolean>();
  mainNav(){
      this.old = false;
    this.back.emit(this.old);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
