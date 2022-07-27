import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';



import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';


@NgModule({
  declarations: [SignInPageComponent, SignUpPageComponent, HomePageComponent, UserProfileComponent, UserEditProfileComponent],
  imports: [CommonModule,ReactiveFormsModule,MessagesModule,MessageModule,ButtonModule,RouterModule],
  exports: [SignInPageComponent, SignUpPageComponent, HomePageComponent,UserProfileComponent,UserEditProfileComponent],
})
export class HomeModule {}
