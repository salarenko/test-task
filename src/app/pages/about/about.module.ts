import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { aboutComponents } from './components';
import { AboutRoutingModule } from './routing/about-routing.module';

@NgModule({
  declarations: aboutComponents,
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
