import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {HeaderInterceptor} from './interceptor/header.interceptor';

const MODULES = [
  CommonModule,
  HttpClientModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    }
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule {
}
