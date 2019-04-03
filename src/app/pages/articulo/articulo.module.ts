import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';
import { ArticuloComponent } from './articulo.component';

@NgModule({
  declarations: [ArticuloListComponent, ArticuloDetailComponent, ArticuloComponent],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    FormsModule
  ]
})
export class ArticuloModule { }
