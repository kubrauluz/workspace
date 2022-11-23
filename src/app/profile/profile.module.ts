import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from "./profile.component";
import { BalancesComponent } from './balances/balances.component';
import { OpenOrdersComponent } from './open-orders/open-orders.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    ProfileComponent,
    BalancesComponent,
    OpenOrdersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
