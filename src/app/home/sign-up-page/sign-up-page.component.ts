import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent  {

  upForm=new FormGroup({firstName:new FormControl('',[Validators.required,Validators.maxLength(8)])

  })

  get firstName(){
    return this.upForm.get("firstName");
  }


}
