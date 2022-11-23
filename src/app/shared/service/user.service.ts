import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import {distinctUntilChanged, exhaustMap, map, shareReplay, startWith, switchMap} from 'rxjs/operators';

import {SessionService} from './session.service';
import {environment} from "../../../environments/environment";
import {User, UserServer} from "../model/user";

interface Link {
  path: string;
  title: string;
  icon: string;
  children: Link[];
  parentMenuId: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private session: SessionService,
    private http: HttpClient,
  ) {
  }

  public refreshUser$ = new Subject();
  public user$: Observable<User> = this.session.loggedIn$.pipe(
    map(token => !!token),
    distinctUntilChanged(),
    exhaustMap(loggedIn => {
      return (loggedIn ? this.getUser() : of(null))
    }),
    switchMap((status) => {
        if (!status) {
          return of(null as any);
        }
        return this.refreshUser$.pipe(
          startWith(true),
          exhaustMap(() => this.getUser())
        );
      }
    ),
    shareReplay({bufferSize: 1, refCount: false})
  );


  private async getUser(): Promise<User> {
    const {me} = await this.http.post<UserServer>(`${environment.api}/interview/auth/me`, {}).toPromise();
    return me;
  }
}


