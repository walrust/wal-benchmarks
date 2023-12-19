import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ForComponentComponent } from './for-component/for-component.component';

@NgModule({
  declarations: [
    ForComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ForComponentComponent]
})
export class AppModule { }
