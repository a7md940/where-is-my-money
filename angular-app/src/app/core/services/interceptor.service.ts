import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from './../../helpers/utils';

@Injectable({
  providedIn: 'root'
})
export class Interceptor {
  constructor(
    private http: HttpClient,
    private utilities: Utils
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token = this.utilities.getUserToken();
    const clonedReq = req.clone({
        headers: new HttpHeaders({
            'token': token,
            'lang': 'en'
        })
    });
    return next.handle(clonedReq);
  }
}
