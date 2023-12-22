import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponentComponent } from './root-component/root-component.component';
import { NestedComponentComponent } from './nested-component/nested-component.component';

@NgModule({
  declarations: [
    RootComponentComponent,
    NestedComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [RootComponentComponent]
})
export class AppModule { }
