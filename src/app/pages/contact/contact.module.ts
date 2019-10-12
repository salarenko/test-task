import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { contactComponents } from './components';
import { ContactRoutingModule } from './routing/contact-routing.module';

@NgModule({
  declarations: contactComponents,
  imports: [
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule {
}
