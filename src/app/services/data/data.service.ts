import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Planet, ResolvedPlanet } from 'src/app/planet/planet.types';
import { SimplePlanet } from 'src/app/planets/planets.types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPlanets(page: number): Observable<SimplePlanet[]> {
    return this.http
      .get(`${this.baseUrl}/planets/?page=${page}`)
      .pipe(map((d: any) => d.results.map((p) => this.lightTransformPlanet(p))));
  }

  getPlanet(id): Observable<Planet> {
    return this.http.get(`${this.baseUrl}/planets/${id}`).pipe(map((d: any) => this.transformPlanet(d)));
  }

  getPlanetPagesCount(): Observable<number> {
    return this.http.get(`${this.baseUrl}/planets/`).pipe(map((d: any) => Math.ceil(d.count / 10)));
  }

  getPlanetWithResidents(id): Observable<ResolvedPlanet> {
    return combineLatest([
      this.getPlanet(id),
      this.getPlanet(id).pipe(
        map((p) => (p.residents.length ? forkJoin(p.residents.map((r) => this.http.get(r))) : of([]))),
        switchMap((d) => d),
      ),
    ]).pipe(
      map(([planet, residents]) => ({
        planet: this.transformPlanet(planet),
        residents,
      })),
    );
  }

  lightTransformPlanet({ url, name, climate, population }): SimplePlanet {
    return {
      id: this.extractId(url),
      name,
      climate,
      population,
    };
  }

  transformPlanet({
    id,
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residents,
    url,
  }): Planet {
    return {
      id: id ? id : this.extractId(url),
      name,
      rotation_period,
      diameter,
      climate,
      gravity,
      terrain,
      population,
      residents,
      url,
    };
  }

  extractId(url): string {
    const idRegExp = /\/([0-9]*)\/$/;

    return url.match(idRegExp)[1];
  }
}
