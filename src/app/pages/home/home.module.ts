import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { homeComponents } from './components';
import { homeResolvers } from './resolvers';
import { HomeRoutingModule } from './routing/home-routing.module';

@NgModule({
  declarations: homeComponents,
  providers: homeResolvers,
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
