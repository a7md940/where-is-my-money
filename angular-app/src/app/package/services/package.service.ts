import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(
    private http: HttpClient
  ) { }

  addOnePackage(pack){
    return this.http.post(environment.apiUrl + '/pack', pack, {
      headers:  {
        'token': localStorage['token']
      }
    });
  }

  getUserPackages() {
    return this.http.get(environment.apiUrl + '/pack');
  }

  getOnePack(packId) {
    return this.http.get(environment.apiUrl + '/pack/?packId=' + packId);
  }
}
