import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-edit-page',
  templateUrl: './host-edit-page.component.html',
  styleUrls: ['./host-edit-page.component.css']
})
export class HostEditPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  xxx:any;
 myfun(){
  var  x= document.getElementsByClassName("first");
  var  xx= document.getElementsByClassName("sec");
  Array.prototype.forEach.call(x, function(el) {
    // Do stuff here
    el.classList.toggle('d-none');
});
Array.prototype.forEach.call(xx, function(el) {
  // Do stuff here
  el.classList.toggle('d-none');
});

  this.xxx= document.querySelector(".bk");
  this.xxx.innerHTML="second page"



}

myfun2(){
  var  x= document.getElementsByClassName("sec");
  Array.prototype.forEach.call(x, function(el) {
    // Do stuff here
    el.classList.toggle('d-none');
});
var  xx= document.getElementsByClassName("th");
Array.prototype.forEach.call(xx, function(el) {
  // Do stuff here
  el.classList.toggle('d-none');
});




}


}
