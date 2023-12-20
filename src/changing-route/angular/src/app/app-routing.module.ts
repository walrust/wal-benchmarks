import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AnotherPageComponent } from './another-page/another-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'another', component: AnotherPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
