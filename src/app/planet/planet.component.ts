import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  providers: [],
})
export class PlanetComponent implements OnInit {
  planet$: Observable<any> = this.dataService.getPlanet(this.route.snapshot.params.planet);

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {}

}
