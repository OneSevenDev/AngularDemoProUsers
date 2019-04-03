import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { ArticuloDataModel } from './shared/articulo-data.model';
import { Articulo } from './shared/articulo.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  currentPage: TIPOPAGINA;
  articuloSelected: Articulo;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    this.currentPage = TIPOPAGINA.listar;
  }

  ngOnInit() {
  }

  changePage(event: ArticuloDataModel) {
    this.currentPage = event.tipopagina;
    this.articuloSelected = event.articulo;
    this.changeDetector.detectChanges();
  }

}
