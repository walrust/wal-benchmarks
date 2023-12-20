import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AnotherPageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
