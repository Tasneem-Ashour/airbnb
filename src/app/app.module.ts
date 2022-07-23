import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './Users-Modules/users/users.component';
import { HostsComponent } from './Hosts-Module/hosts/hosts.component';
import { HeaderComponent } from './Header-Module/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HostsComponent,
    HeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
