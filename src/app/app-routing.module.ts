import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'planets',
  },
  {path: 'planets/:planet', component: PlanetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
