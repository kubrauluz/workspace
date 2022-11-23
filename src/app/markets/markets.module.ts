import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import {MarketsRoutingModule} from "./markets-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MarketsComponent,
    MarketDetailComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class MarketsModule {}
