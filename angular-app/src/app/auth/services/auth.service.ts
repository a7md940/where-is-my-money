import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from '../models/register-info.model';
import { environment } from './../../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { AppStateService } from './../../core/services/app-state.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private appState: AppStateService,
    private router: Router
  ) { }

  createNewUser(registerInfo: userInfo) {
    return this.http.post(environment.apiUrl + '/signup', registerInfo)
    .pipe(
      tap((resp) => {
        if(resp) {
          localStorage['token'] = resp['token'];
          this.appState.isLoggedIn$.next(true);
        }
      })
    )
  }

  signIn(userAuth) {
    return this.http.post(environment.apiUrl + '/signin', userAuth)
    .pipe(
      tap((res)=>{
        console.log('res ::' , res)
        if(res['token']){
          localStorage['token'] = res['token'];
          this.appState.isLoggedIn$.next(true);
        }
        if(res['data']) localStorage['userInfo'] = JSON.stringify(res['data']);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.appState.isLoggedIn$.next(false);
    this.router.navigate(['/']);
  }
}