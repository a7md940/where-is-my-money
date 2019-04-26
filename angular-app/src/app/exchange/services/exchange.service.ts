import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(
    private http: HttpClient
  ) { }
  exchangeFromPack(date) {
    return this.http.post(environment.apiUrl + '/exchange', date);
  }

  getExchangesByPackId(exchangeId) {
    return this.http.get(`${environment.apiUrl}/exchange/${exchangeId}`);
  }
}
