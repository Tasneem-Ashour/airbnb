import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SignInHeaderComponent } from './sign-in-header/sign-in-header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SignInHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, ButtonModule,SignInHeaderComponent],
})
export class CoreModule {}
