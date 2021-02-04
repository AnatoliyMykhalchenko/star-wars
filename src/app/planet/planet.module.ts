import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlanetComponent } from './planet.component';
import { ResidentsComponent } from './residents/residents.component';

@NgModule({
  declarations: [
    PlanetComponent,
    ResidentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PlanetModule { }
