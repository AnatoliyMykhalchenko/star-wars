import { Observable } from 'rxjs';

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

export interface Planet {
  id: string;
  name: string;
  rotation_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  residents: string[];
  url: string;
}

export interface ResolvedPlanet {
  planet: Planet;
  residents:Person[];
}
