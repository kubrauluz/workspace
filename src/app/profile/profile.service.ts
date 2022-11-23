import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime, map, shareReplay, startWith, switchMap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BalanceList, OpenOrderList} from "./model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public requestBalances$ = new Subject();
  public balances$ = this.requestBalances$.pipe(
    startWith({}),
    debounceTime(300),
    switchMap(() => {
      return this.http.post<BalanceList>(`${environment.api}/interview/auth/balances`, {});
    }),
    shareReplay({refCount: false, bufferSize: 1})
  );

  public requestOpenOrders$ = new Subject();
  public openOrders$ = this.requestOpenOrders$.pipe(
    startWith({}),
    debounceTime(300),
    switchMap(() => {
      return this.getOpenOrders();
    }),
    shareReplay({refCount: false, bufferSize: 1})
  );

  constructor(private http: HttpClient) {
  }

  public async getOpenOrders() {
    const result = await this.http.post<OpenOrderList>(`${environment.api}/interview/auth/open-orders`, {}).toPromise();
    result.openOrders.map(item => {
      const fillPercent = item.fillAmount / item.orderAmount * 100;
      item.fillPercent = fillPercent;
    })
    return result;
  }
}
