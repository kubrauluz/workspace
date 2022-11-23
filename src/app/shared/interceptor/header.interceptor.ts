import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { SessionService } from '../service/session.service';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(
    private readonly session: SessionService,
  ) {
  }

  // tslint:disable-next-line:no-any
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.session.token$.pipe(first(), switchMap(token => {
      if (token) {
        request = this.setToken(request, token.accessToken);
      }

      return next.handle(request);
    }));
  }

  private setToken<T>(request: HttpRequest<T>, accessToken: string): HttpRequest<T> {
    return request.clone({
      setHeaders: {
        'x-bitlo-auth': `${accessToken}`
      },
    });
  }
}
