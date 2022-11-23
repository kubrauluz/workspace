import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss']
})
export class BalancesComponent implements OnInit {
  public balances$ = this.profileService.balances$;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

}
