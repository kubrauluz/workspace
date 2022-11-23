import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.scss']
})
export class OpenOrdersComponent implements OnInit {
  public openOrders$ = this.profileService.openOrders$

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

}
