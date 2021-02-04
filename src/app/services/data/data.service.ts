import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPlanets(page: number): Observable<any[]> {
    return this.http
      .get(`${this.baseUrl}/planets/?page=${page}`)
      .pipe(map((d: any) => d.results.map((p) => this.lightTransformPlanet(p))));
  }

  getPlanetPagesCount(): Observable<number> {
    return this.http.get(`${this.baseUrl}/planets/`).pipe(map((d: any) => Math.ceil(d.count / 10)));
  }

  lightTransformPlanet({ url, name, climate, population }): any {
    return {
      id: this.extractId(url),
      name,
      climate,
      population,
    };
  }

  extractId(url): string {
    const idRegExp = /\/([0-9]*)\/$/;

    return url.match(idRegExp)[1];
  }
}
