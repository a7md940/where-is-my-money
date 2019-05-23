import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PackageService } from './../services/package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {
  addPackageForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private packService: PackageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addPackageForm = this.fb.group({
      'pack-large': [],
      'title': []
    })
  }

  addOnePackage(){
    console.log(this.addPackageForm.value)
    this.packService.addOnePackage(this.addPackageForm.value).subscribe((res: any)=>{
      console.log(res);
      const packId = res.data.pack._id;
      this.router.navigate(['/packages']);
    });
  }
}
