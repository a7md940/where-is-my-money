import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SigunpComponent } from './sigunp/sigunp.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigunpComponent, SigninComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
  ]
})
export class AuthModule { }
