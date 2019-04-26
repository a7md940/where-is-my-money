import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from '../models/register-info.model';
import { environment } from './../../../environments/environment.prod';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  createNewUser(registerInfo: userInfo) {
    return this.http.post(environment.apiUrl + '/signup', registerInfo)
  }

  signIn(userAuth) {
    return this.http.post(environment.apiUrl + '/signin', userAuth)
    .pipe(
      tap((res)=>{
        console.log('res ::' , res)
        if(res['token']){
          localStorage['token'] = res['token'];
        }
        if(res['data']) localStorage['userInfo'] = JSON.stringify(res['data']);
      })
    );
  }
}
