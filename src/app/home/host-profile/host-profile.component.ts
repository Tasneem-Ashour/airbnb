import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { HostProperties } from 'src/app/_models/host-properties';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css']
})
export class HostProfileComponent implements OnInit {

  constructor(
    public HostProperty:HostService , 
  ) { }

  hostProp: HostProperties []=[];

  ngOnInit(): void {
    this.HostPropertyById()
  }

  HostPropertyById(){
    // this.ar.params.subscribe(a=>{
      this.HostProperty.getPropertiesByHostId().subscribe((req)=>
      //console.log(req);
      this.hostProp=req)
    
   
  };

}
