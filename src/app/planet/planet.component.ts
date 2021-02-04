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
  data$: Observable<any> = this.dataService.getPlanetWithResidents(this.route.snapshot.params.planet);

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {}

}
