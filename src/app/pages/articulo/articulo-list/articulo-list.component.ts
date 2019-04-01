import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticuloService } from '../shared/articulo.service';
import { Articulo } from '../shared/articulo.model';
import { ArticuloDataModel } from '../shared/articulo-data.model';
import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {
  @Output() changePage: EventEmitter<ArticuloDataModel> = new EventEmitter();
  articulos: Articulo[];
  articulo: Articulo;

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.fnListaArticulos();
  }
  nuevo() {}

  fnListaArticulos() {
    this.articuloService.listarArticulos().subscribe(req => {
      this.articulos = req;
    });
  }

  editar(item: Articulo) {
    console.log(item);
    this.articuloService.recuperarArticulo(String(item.codigo)).subscribe(req => {
      const modelSend: ArticuloDataModel = {
        tipopagina: TIPOPAGINA.editar,
        articulo: req
      };
      this.returnModel(modelSend);
    });
  }

  returnModel(model: ArticuloDataModel) {
    this.changePage.emit(model);
  }
}
