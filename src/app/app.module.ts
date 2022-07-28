import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    ButtonModule,
    HomeModule,CoreModule
    , ReactiveFormsModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
