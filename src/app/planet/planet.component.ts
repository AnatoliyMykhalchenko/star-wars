import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data/data.service';
import { Person, ResolvedPlanet } from './planet.types';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  providers: [],
})
export class PlanetComponent implements OnInit {
  data$: Observable<ResolvedPlanet> = this.route.data.pipe(map((d) => d.planet));
  currentPerson: Person;
  isResidentsEmpty$: Observable<boolean> = this.data$.pipe(map((d) => !!d.residents.length));

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {}

  setCurrentPerson(p) {
    this.currentPerson = p;
  }
}
