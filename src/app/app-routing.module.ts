import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanPageComponent } from './pages/scan-page/scan-page.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent
  },{
    path: 'scan',
    component: ScanPageComponent
  },{
    path: 'submit',
    component: SubmitPageComponent
  },{
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/scan'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
