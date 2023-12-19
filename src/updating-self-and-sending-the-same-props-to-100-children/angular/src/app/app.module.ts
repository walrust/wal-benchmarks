import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ParentComponentComponent]
})
export class AppModule { }
