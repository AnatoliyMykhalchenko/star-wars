import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data/data.service';
import { SimplePlanet } from './planets.types';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  planets: SimplePlanet[] = [];
  currentPage = 1;
  pagesCount$: Observable<number> = this.dataService.getPlanetPagesCount();
  isBtnDisabled$: Observable<boolean>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPlanets(this.currentPage).subscribe((res) => {
      this.planets = res;
    });
  }

  loadMore(): void {
    this.currentPage += 1;
    this.dataService.getPlanets(this.currentPage).subscribe((res) => {
      this.planets = [...this.planets, ...res];
    });
    this.isBtnDisabled$ = this.pagesCount$.pipe(map((c) => this.currentPage >= c));
  }
}
