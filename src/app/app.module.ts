import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditcardDirective } from './shared/directives/creditcard.directive';
import { ToggleDirective } from './shared/directives/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditcardDirective,
    ToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
