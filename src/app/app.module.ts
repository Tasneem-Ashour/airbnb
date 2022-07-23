import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './Users-Modules/users/users.component';
import { HostComponent } from './Host-Modules/host/host.component';
import { HostsComponent } from './Hosts-Modules/hosts/hosts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HostComponent,
    HostsComponent
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
