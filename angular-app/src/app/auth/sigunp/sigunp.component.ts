import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { userInfo } from '../models/register-info.model';

@Component({
  selector: 'app-sigunp',
  templateUrl: './sigunp.component.html',
  styleUrls: ['./sigunp.component.scss']
})
export class SigunpComponent implements OnInit {
  signup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.signup = this.fb.group({
      'name': [],
      'email': ['', Validators.email],
      'password': [],
      'confirmPassword': []
    })
  }

  register(){
    delete this.signup.value.confirmPassword;
    let userInfo: userInfo = {
      username: this.signup.value.name,
      password: this.signup.value.password,
      email: this.signup.value.email
    };
    this.authService.createNewUser(userInfo)
      .subscribe((res: any) => {
        if(res.success) {
          localStorage['token'] = res.token;
          localStorage['userInfo'] = JSON.stringify(res.data);
          this.router.navigate([''])
        }
      })
  }

}
