import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './home/booking/booking.component';
import { ConfirmBookingComponent } from './home/confirm-booking/confirm-booking.component';
import { HomePageComponent } from './home/home-page/home-page.component';

import { HostPageComponent } from './home/host-page/host-page.component';
import { HostProfileComponent } from './home/host-profile/host-profile.component';

import { SignInPageComponent } from './home/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './home/sign-up-page/sign-up-page.component';
import { UserEditProfileComponent } from './home/user-edit-profile/user-edit-profile.component';
import { UserProfileComponent } from './home/user-profile/user-profile.component';
import { UserViewComponent } from './home/user-view/user-view.component';
import { ViewComponent } from './home/view/view.component';

const routes: Routes = [
  { path: "signup", component: SignUpPageComponent },
  { path: "signin", component: SignInPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "edit", component: UserEditProfileComponent },
  { path: "host", component: HostPageComponent },

  { path: "", component: HomePageComponent },
  { path: "view", component: ViewComponent },
  { path: "booking", component: BookingComponent },
  { path: "hostProfile", component: HostProfileComponent },
  { path: "userView", component: UserViewComponent },
  { path: "confirmbooking", component: ConfirmBookingComponent },








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
