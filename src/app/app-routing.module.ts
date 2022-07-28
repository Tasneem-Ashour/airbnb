import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HostPageComponent } from './home/host-page/host-page.component';
import { SignInPageComponent } from './home/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './home/sign-up-page/sign-up-page.component';
import { UserEditProfileComponent } from './home/user-edit-profile/user-edit-profile.component';
import { UserProfileComponent } from './home/user-profile/user-profile.component';

const routes: Routes = [
  { path: "signup", component: SignUpPageComponent },
  { path: "signin", component: SignInPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "edit", component: UserEditProfileComponent },
  { path: "host", component: HostPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
