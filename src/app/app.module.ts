import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, coreComponents } from './core/components';
import { coreInterceptorProviders } from './core/interceptors';

import { AppRoutingModule } from './core/routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: coreComponents,
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: coreInterceptorProviders,
  bootstrap: [AppComponent]
})
export class AppModule {
}
