import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './pages/';

const appRoutes: Routes = [
  { path: '', component: pages.LandingPageComponent, pathMatch: 'full' },
  // { path: 'admin', component: pages.AdmincoverComponent,
  //   children: [
  //     {path: '', component: pages.},
  //   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
