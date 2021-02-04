import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlanetComponent } from './planet.component';

@NgModule({
  declarations: [
    PlanetComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PlanetModule { }
