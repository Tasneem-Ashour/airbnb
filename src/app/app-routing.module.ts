import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Header-Module/header/header.component';
import { HostsComponent } from './Hosts-Module/hosts/hosts.component';
import { UsersComponent } from './Users-Modules/users/users.component';


const routes: Routes = [
  {path:'user',component:UsersComponent},
  {path:'host',component:HostsComponent},
  {path:'header',component:HeaderComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
