import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import { RouterModule ,Route } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { HostPageComponent } from './host-page/host-page.component';
import {ListboxModule} from 'primeng/listbox';
import { HostEditPageComponent } from './host-edit-page/host-edit-page.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [SignInPageComponent, SignUpPageComponent, HomePageComponent, UserProfileComponent, UserEditProfileComponent, HostPageComponent, HostEditPageComponent],
  imports: [CommonModule,ReactiveFormsModule,MessagesModule,MessageModule,ButtonModule,RouterModule,ListboxModule ,DropdownModule,BrowserAnimationsModule],
  exports: [SignInPageComponent, SignUpPageComponent, HomePageComponent,UserProfileComponent,UserEditProfileComponent],
})
export class HomeModule {}
