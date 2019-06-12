import { AppEvents } from './../../store/eventbus/eventbus.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { EventbusService } from 'src/app/store/eventbus/eventbus.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(
    private http: HttpClient,
    private eventBus: EventbusService
  ) { }
  exchangeFromPack(data) {
    this.eventBus.emit(AppEvents.addExchange, data);
    return this.http.post(environment.apiUrl + '/exchange', data);
  }

  getExchangesByPackId(exchangeId) {
    return this.http.get(`${environment.apiUrl}/exchange/${exchangeId}`);
  }
}
