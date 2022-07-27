import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PassValidService } from 'src/app/services/pass-valid.service';
import { IUser } from 'src/app/_models/iuser';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent  {

  upForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.maxLength(10)]),
  lastName:new FormControl('',[Validators.required,Validators.minLength(4)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('', [Validators.required]),
  confirmPassword: new FormControl('', [Validators.required]),
  UserType: new FormControl('', [Validators.required]),

  },[PassValidService.MatchValidator('password', 'confirmPassword')])

  get firstName(){
    return this.upForm.get("firstName");
  }
  get lastName(){
    return this.upForm.get("lastName");
  }
  get email(){
    return this.upForm.get("email");
  }
  get passwordMatchError() {
    return (
      this.upForm.getError('mismatch') &&
      this.upForm.get('confirmPassword')?.touched
    );
  }
  get UserType(){
    return this.upForm.get("UserType");
  }

  Register(){
    console.log(this.upForm.value);
    this.upForm.reset();
  }

}
