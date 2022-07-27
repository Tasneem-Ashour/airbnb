import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {
  isUserLogged:boolean=false;
  constructor(private authService :UserAuthService ){}

  form=new FormGroup({
    email: new FormControl('', [Validators.required , Validators.email]  ),
    password: new FormControl('', [ Validators.required ]) 
  })


   
  get email(){
    return this.form.get("email");
  }
  
  get password(){
    return this.form.get("password");
  
  }

  ngOnInit(){
    this.isUserLogged=this.authService.isUserLogged;
  }




  Login(){

    if(!this.form.valid){
      return;
    }
    console.log(this.form.value);

    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.login(email!,password!).subscribe(
      resData =>{
        console.log(resData);
      },
      error=>{console.log(error);}
    );
    this.form.reset();
    //check if it null 
// this.authService.login(this.form.controls.email.value!,this.form.controls.password.value!).subscribe({next:(tokenDTO)=>{
//   localStorage.setItem("token", tokenDTO); //.token 


//   //router.nav //nav.url // redirect 

// }});
// this.isUserLogged=this.authService.isUserLogged;

}


 }

 

