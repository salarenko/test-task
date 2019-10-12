import { NgModule } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook, faBookOpen, faMapMarkedAlt, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class AppFontAwesomeModule {
  constructor() {
    library.add(
      faSearch,
      faBookOpen,
      faAddressBook,
      faShoppingCart,
      faMapMarkedAlt
    );
  }
}
