import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../planet.types';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss'],
})
export class ResidentsComponent implements OnInit {
  @Input() residents: Person[];
  @Output() setCurrentPerson = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
