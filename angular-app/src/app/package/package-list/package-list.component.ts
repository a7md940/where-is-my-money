import { Component, OnInit } from '@angular/core';
import { PackageService } from './../services/package.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  packagesList: Observable<any>;
  constructor(
    private packService: PackageService
  ) { }

  ngOnInit() {
    this.packagesList = this.packService.getUserPackages()
    // .subscribe((res: any)=>{
    //   this.packagesList = res;
    //   console.log('Packs are ::', res);
    // })
  }

}
