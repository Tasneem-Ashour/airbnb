import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { Currencies } from 'src/app/_models/currencies';
import { HostProperties } from 'src/app/_models/host-properties';
import { PropetyById } from 'src/app/_models/propety-by-id';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(public property:HostService , public ar:ActivatedRoute) { }

  HostProp =new PropetyById();
  currencyName:Currencies[]=[];
  ngOnInit(): void {
  // this.getAllData(25);
  this.ar.params.subscribe((a)=>{
    this.property.geWithAllData(a['id']).subscribe((req)=>{
      this.HostProp=req;
    })
  })
  }




  // getAllData(id:number){
  //   this.property.getPropertyById(id).subscribe((req)=>{
  //     console.log(req);
  //     this.HostProp=req;
  //   })
  // }




}
