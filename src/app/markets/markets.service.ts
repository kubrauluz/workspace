import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MarketList, Markets} from "./model";
import {BehaviorSubject, Subject} from "rxjs";
import {debounceTime, shareReplay, startWith, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MarketsService {
  public selectedMarket$ = new BehaviorSubject<Markets>({});
  public requestMarkets$ = new Subject();
  public markets$ = this.requestMarkets$.pipe(
    startWith([]),
    debounceTime(300),
    switchMap(() => {
      return this.http.get<MarketList[]>(`${environment.api}/interview/markets`);
    }),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  constructor(private http: HttpClient) { }
}
