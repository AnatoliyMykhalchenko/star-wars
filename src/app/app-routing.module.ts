import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetResolverService } from './services/planet-resolver/planet-resolver.service';

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
  { path: 'planets/:planet', component: PlanetComponent, resolve: { planet: PlanetResolverService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
