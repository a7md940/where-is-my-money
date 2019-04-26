import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent implements OnInit {

  exchanges = [];
  totalAmount = 0;
  constructor(
    private exchangeService: ExchangeService,
    private route: ActivatedRoute 
    ) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params)=> this.exchangeService.getExchangesByPackId(params.packId)))
    .subscribe((exchanges: any)=>{
      console.log(exchanges);
      let totalAmount = 0;
      exchanges.exchanges.forEach((item, i, slef)=>{
        this.totalAmount += item.exchanges.amount;
      });
      this.exchanges = exchanges.exchanges;
    });
    
  }

}
