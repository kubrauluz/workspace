import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {BalancesComponent} from "./balances/balances.component";
import {OpenOrdersComponent} from "./open-orders/open-orders.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: UserDetailComponent
      },
      {
        path: 'bakiyeler',
        component: BalancesComponent
      },
      {
        path: 'acik-emirler',
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
