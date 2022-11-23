import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule {
}
