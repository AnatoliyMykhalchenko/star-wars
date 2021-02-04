import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getPlanet(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/planets/${id}`).pipe(map((d: any) => this.transformPlanet(d)));
  }

  getPlanetPagesCount(): Observable<number> {
    return this.http.get(`${this.baseUrl}/planets/`).pipe(map((d: any) => Math.ceil(d.count / 10)));
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
  }): any {
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
