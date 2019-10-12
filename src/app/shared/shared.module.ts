import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { sharedComponents } from './components';
import { AppFontAwesomeModule } from './modules/app-font-awesome.module';

const sharedModules = [CommonModule, AppFontAwesomeModule];

@NgModule({
  declarations: sharedComponents,
  imports: sharedModules,
  exports: [...sharedModules, ...sharedComponents]
})
export class SharedModule {
}
