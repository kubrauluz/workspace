import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {BalancesComponent} from "./balances/balances.component";
import {OpenOrdersComponent} from "./open-orders/open-orders.component";
import {AuthGuard} from "../shared";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: UserDetailComponent
      },
      {
        path: 'bakiyeler',
        canActivate: [AuthGuard],
        component: BalancesComponent
      },
      {
        path: 'acik-emirler',
        canActivate: [AuthGuard],
        component: OpenOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
