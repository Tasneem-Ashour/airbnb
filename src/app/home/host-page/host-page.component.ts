import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})


export class HostPageComponent  {


  

 

  ngOnInit(): void {
  }

  scroll(e1:HTMLElement){
    e1.scrollIntoView();
  }

  saveData(){}

  

}
