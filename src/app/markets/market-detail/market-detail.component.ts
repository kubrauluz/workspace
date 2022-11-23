import { Component, OnInit } from '@angular/core';
import {MarketsService} from "../markets.service";

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.scss']
})
export class MarketDetailComponent implements OnInit {
  public selectedMarket$ = this.service.selectedMarket$;
  constructor(private service: MarketsService) { }

  ngOnInit(): void {
  }

}
