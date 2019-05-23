import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/package/services/package.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  packagesCount: number;
  constructor(
    private packService: PackageService
  ) { }

  ngOnInit() {
    this.packService.getUserPackages().subscribe((resp: any) => {
      this.packagesCount = resp.packages.length;
    });
  }

}
