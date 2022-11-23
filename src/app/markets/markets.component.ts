import {Component, OnInit} from '@angular/core';
import {MarketsService} from "./markets.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {
  public searchText$ = new BehaviorSubject('');
  public markets$ = this.service.markets$;

  constructor(private service: MarketsService) {
  }

  ngOnInit(): void {
  }

}
