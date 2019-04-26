import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';


import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './core/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    CoreModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
