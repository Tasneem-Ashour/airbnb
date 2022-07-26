import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {

  form=new FormGroup({
    email: new FormControl('', [Validators.required , Validators.email]  ),
    password: new FormControl('', [ Validators.required ]) 
  })


   
  get email(){
    return this.form.get("email");
  }
  
  get password(){
    return this.form.get("password");
  
  }}

 

