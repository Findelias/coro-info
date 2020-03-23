import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  MainComponent,
  BulosComponent,
  InfoComponent,
  PrevencionComponent,
  VoluntariadoComponent
 } from './views/index';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'informacion', component: InfoComponent },
  { path: 'bulos', component: BulosComponent },
  { path: 'prevencion', component: PrevencionComponent },
  { path: 'voluntariado', component: VoluntariadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
