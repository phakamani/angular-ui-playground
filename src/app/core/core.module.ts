import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { throwIfAlreadyLoaded } from './guard/module-import.guard';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    HttpClient
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
