import { Component, OnInit } from '@angular/core';
import { EventbusService } from './store/eventbus/eventbus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WIMM';
  constructor(
    private eventBus: EventbusService
  ) {}
ngOnInit() {
  this.eventBus.on('addExchange', (state)=>{
    console.log({state});
  });
}
}
