import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm () {
    this.loginForm = this.fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  signin() {
    if(this.loginForm.invalid) {
      for (let prop in this.loginForm.controls) {
        this.loginForm.controls[prop].markAsTouched();
      }
      return;
    }

    this.authService.signIn(this.loginForm.value).subscribe((resp) => {
      this.router.navigate(['/']);
    },
    (err) => {
      console.log({err})
    })
  }

}
