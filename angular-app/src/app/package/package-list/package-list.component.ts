import { Component, OnInit } from '@angular/core';
import { PackageService } from './../services/package.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  packagesList: Observable<any>;
  constructor(
    private packService: PackageService,
    public router: Router
  ) { }

  ngOnInit() {
    this.packagesList = this.packService.getUserPackages()
    // .subscribe((res: any)=>{
    //   this.packagesList = res;
    //   console.log('Packs are ::', res);
    // })
    
  }

  navigateToCat(catId, packId) {
    this.router.navigate([`/categories/${catId}`], {
      queryParams: {
        packId
      }
    });
  }

}
