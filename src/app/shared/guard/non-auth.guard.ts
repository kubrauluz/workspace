import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first } from 'rxjs/operators';

import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  public async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const loggedIn = await this.session.loggedIn$.pipe(first()).toPromise();

    if (loggedIn) {
      this.router.navigate(['']);
    }

    return !loggedIn;
  }
}
