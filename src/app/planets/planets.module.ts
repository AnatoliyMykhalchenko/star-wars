import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlanetsComponent } from './planets.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PlanetsComponent
  ]
})
export class PlanetsModule { }
