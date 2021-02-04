import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ItemsListComponent } from './items-list/items-list.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ItemsListComponent,
    InfoComponent,
    HeaderComponent
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
    HeaderComponent,
    MatCardModule,
    MatButtonModule,

  ]
})
export class SharedModule { }
