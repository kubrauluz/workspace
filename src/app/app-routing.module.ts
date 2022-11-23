import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NonAuthGuard} from "./shared";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'auth',
    canActivate: [NonAuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
