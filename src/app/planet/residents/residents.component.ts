import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss'],
})
export class ResidentsComponent implements OnInit {
  @Input() residents;
  @Output() setCurrentPerson = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
