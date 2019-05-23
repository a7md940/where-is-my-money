import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utils } from './../../helpers/utils';
import { catchError } from 'rxjs/operators';

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
    return next.handle(clonedReq).pipe(
      catchError((err) => {
        console.log(
          '%cAPI Error:',
          'color:white;background:purple;font-weight:bold; padding:2px 5px;', 
          err.error && err.error.msg ? err.error.msg : err.message
        );
        return of(err);
      })
    );
  }
}
