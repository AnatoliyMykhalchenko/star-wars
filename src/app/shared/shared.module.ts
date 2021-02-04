import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ItemsListComponent } from './items-list/items-list.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    ItemsListComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    ItemsListComponent,
    InfoComponent,
    MatCardModule,
    MatButtonModule,

  ]
})
export class SharedModule { }
