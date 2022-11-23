import { Component, OnInit } from '@angular/core';
import {SessionService, UserService} from "../../shared";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$ = this.userService.user$;
  constructor(private userService: UserService,
              private sessionService: SessionService,
              private router: Router) { }

  public ngOnInit(): void {
  }

  public logOut() {
    this.sessionService.logout();
    this.router.navigate(['/']);
  }

}
