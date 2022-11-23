import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import {MarketsRoutingModule} from "./markets-routing.module";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    MarketsComponent,
    MarketDetailComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    MatTableModule
  ]
})
export class MarketsModule {}
