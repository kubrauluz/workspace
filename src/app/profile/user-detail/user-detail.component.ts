import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public user$ = this.userService.user$;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
