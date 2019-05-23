import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from './../../package/services/package.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExchangeService } from './../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  exchangeForm: FormGroup;
  packId: string;

  desc;
  exType;
  amount;
  
  constructor(
    private route: ActivatedRoute,
    private packService: PackageService,
    private fb: FormBuilder,
    private exchangeService: ExchangeService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.intializeExForm();
    this.packId = this.route.snapshot.params['packId'];
    this.packService.getOnePack(this.packId)
      .subscribe((res) =>{
        console.log('pack is ::', res);
      });
  }

  intializeExForm() {
    this.exchangeForm = this.fb.group({
      'amount': ['', [Validators.required]],
      'exType': ['', [Validators.required]],
      'desc': ['',[Validators.required]]
    })
  }

  exchange(form) {
    console.log('form ::', form.value)
    const data = {
      "exchanges": {
        "amount": this.amount,
        "desc": this.desc,
        "exType": this.exType
      },
      "packId": this.packId
    }
    
    this.exchangeService.exchangeFromPack(data).subscribe((res: any)=>{
      console.log('exchange done res from api is ::', res);
      const packId = res.data.packId;
      this.router.navigate(['/exchange/exchanges', packId]);
    })
  }
}
