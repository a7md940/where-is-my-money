import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './package-list/package-list.component';
import { AddPackageComponent } from './add-package/add-package.component';

const routes: Routes = [
  {
    path: '', component: PackageListComponent
  },
  {
    path: 'add', component: AddPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PackageRoutingModule { }
