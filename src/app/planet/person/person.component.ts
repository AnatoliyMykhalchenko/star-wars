import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../planet.types';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Input() isVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
