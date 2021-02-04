import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResolvedPlanet } from 'src/app/planet/planet.types';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetResolverService implements Resolve<ResolvedPlanet> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedPlanet> {
    return this.dataService.getPlanetWithResidents(route.paramMap.get('planet'));
  }
}
