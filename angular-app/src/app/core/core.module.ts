import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
