import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { RouterModule, Route } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { HostPageComponent } from './host-page/host-page.component';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';
import { BookingComponent } from './booking/booking.component';
import { HostProfileComponent } from './host-profile/host-profile.component';
import { UserViewComponent } from './user-view/user-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
// import { HostPropertyComponent } from './host-property/host-property.component';

// to create curd using angular material

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { AddPropertyComponent } from './host-property/add-property/add-property.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';
import { HostPropertyComponent } from './host-property/host-property.component';
import { AddPropertyComponent } from './host-property/add-property/add-property.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    UserProfileComponent,
    UserEditProfileComponent,
    HostPageComponent,
    ViewComponent,
    BookingComponent,
    HostProfileComponent,
    UserViewComponent,
    ConfirmBookingComponent,
    HostPropertyComponent,
    AddPropertyComponent,
  ],
  imports: [
    CommonModule,
    MessageModule,
    ButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    StepsModule,
    ToastModule,
    ReactiveFormsModule,
    MessagesModule,
    ListboxModule,
    DropdownModule,
    FormsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    SignInPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    UserProfileComponent,
    UserEditProfileComponent,
    ViewComponent,
    BookingComponent,
    HostPageComponent,
    UserViewComponent,
    ConfirmBookingComponent,
    SignInPageComponent,
    UserViewComponent,
  ],
})
export class HomeModule {}
