import {Component, OnInit} from '@angular/core';
import {MarketsService} from "./markets.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {
  public markets$ = this.service.markets$;
  public selectedMarket$ = this.service.selectedMarket$;

  constructor(private service: MarketsService) {
  }

  ngOnInit(): void {
  }

  public async selectMarket(code: any) {
    const markets = await this.markets$.pipe(first()).toPromise();
    const selectedMarket = markets.find(item => item.marketCode === code);
    await this.selectedMarket$.next({...selectedMarket, marketCode: selectedMarket ? selectedMarket.marketCode.replace('-', '/') : ''});
  }

}
