import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { PackageListComponent } from './package-list/package-list.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PackageListComponent, AddPackageComponent],
  imports: [
    CommonModule,
    PackageRoutingModule,
    SharedModule
  ]
})
export class PackageModule { }
