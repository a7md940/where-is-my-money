import { AuthRoutingModule } from './../auth/auth-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ], 
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
