import {Component, OnInit} from '@angular/core';
import {MarketsService} from "../markets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {combineLatest, distinctUntilChanged, map, pluck, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.scss']
})
export class MarketDetailComponent implements OnInit {
  public selectedMarket$ = this.route.params.pipe(
    pluck('marketCode'),
    distinctUntilChanged(),
    combineLatest(this.service.markets$),
    map(([marketCode, markets]) => {
      if (!marketCode) {
        return;
      }
      return markets.find(item => item.marketCode === marketCode);
    }),
    shareReplay({refCount: false, bufferSize: 1})
  );

  constructor(private service: MarketsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
