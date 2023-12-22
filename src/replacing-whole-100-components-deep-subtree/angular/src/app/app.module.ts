import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponentComponent } from './root-component/root-component.component';
import { NestedComponent1Component } from './nested-component1/nested-component1.component';
import { NestedComponent2Component } from './nested-component2/nested-component2.component';

@NgModule({
  declarations: [
    RootComponentComponent,
    NestedComponent1Component,
    NestedComponent2Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [RootComponentComponent]
})
export class AppModule { }
