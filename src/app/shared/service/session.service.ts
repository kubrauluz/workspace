import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, distinctUntilChanged, shareReplay, switchMap, take, tap} from 'rxjs/operators';

import {Login} from '../model/login.model';
import {LoginResponse} from '../model/login.response';
import {Token} from '../model/token.model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  // @ts-ignore
  public token$: Observable<Token> = new BehaviorSubject<Token>(null);
  public _token$: BehaviorSubject<Token | null> = this.token$ as BehaviorSubject<Token | null>;

  public loggedIn$ = this.token$.pipe(
    distinctUntilChanged(),
    // @ts-ignore
    switchMap(token => {
      if (!token) {
        return of(false);
      }
      return of(true);
    }),
    shareReplay({bufferSize: 1, refCount: false})
  );

  constructor(
    private readonly http: HttpClient,
  ) {
    const token = localStorage.getItem('token');
    // @ts-ignore
    this._token$.next(JSON.parse(token) as Token || null);

    this.token$.subscribe((newToken) => {
      localStorage.setItem('token', JSON.stringify(newToken));
    });
  }

  public async login(login: Login): Promise<any> {
    return await this.http
      .post<LoginResponse>(`${environment.api}/interview/auth/login`, {
        identifier: login.identifier,
        password: login.password
      })
      .pipe(
        tap((res) => {
          this._token$.next({
            accessToken: res.token
          });
        }),
        switchMap(res => this.loggedIn$.pipe(take(1)).toPromise().then(() => res)),
        catchError(err => of(err)),
      )
      .toPromise();
  }

  public logout() {
    this._token$.next(null);
  }

}
