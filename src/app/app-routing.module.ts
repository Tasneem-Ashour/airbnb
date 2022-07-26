import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SignInPageComponent } from './home/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './home/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: "signup", component: SignUpPageComponent },
  { path: "signin", component: SignInPageComponent },
  { path: "home", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
