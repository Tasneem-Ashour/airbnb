import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInPageComponent, SignUpPageComponent, HomePageComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [SignInPageComponent, SignUpPageComponent, HomePageComponent],
})
export class HomeModule {}
