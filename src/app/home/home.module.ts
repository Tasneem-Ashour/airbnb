import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsModule } from "primeng/steps";
import { ToastModule } from "primeng/toast";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import { RouterModule ,Route } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { HostPageComponent } from './host-page/host-page.component';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';
import { BookingComponent } from './booking/booking.component';
import { HostProfileComponent } from './host-profile/host-profile.component';
import { UserViewComponent } from './user-view/user-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';




@NgModule({
  declarations: [SignInPageComponent, SignUpPageComponent, HomePageComponent, UserProfileComponent, UserEditProfileComponent, HostPageComponent, ViewComponent, BookingComponent, HostProfileComponent, UserViewComponent, ConfirmBookingComponent],
  imports: [CommonModule,ReactiveFormsModule,MessagesModule,MessageModule,ButtonModule,RouterModule,ListboxModule ,DropdownModule,BrowserAnimationsModule,FormsModule,BrowserModule,  StepsModule,
    ToastModule],
  exports: [SignInPageComponent, SignUpPageComponent, HomePageComponent,UserProfileComponent,UserEditProfileComponent,ViewComponent,BookingComponent,HostPageComponent,UserViewComponent,ConfirmBookingComponent],
})
export class HomeModule {}
