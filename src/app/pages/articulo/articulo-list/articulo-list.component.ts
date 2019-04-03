import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticuloService } from '../shared/articulo.service';
import { Articulo } from '../shared/articulo.model';
import { ArticuloDataModel } from '../shared/articulo-data.model';
import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { NotificaService } from 'src/app/core/servicios/notifica.service';

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
    private articuloService: ArticuloService,
    private notificaRealTime: NotificaService
  ) { }

  ngOnInit() {
    this.fnListaArticulos();
    this.fnLoadRealTimeLista();
  }
  nuevo() {
    const modelSend: ArticuloDataModel = {
      tipopagina: TIPOPAGINA.nuevo,
      articulo: { codigo: 0, nombre: '', precio: 0 }
    };
    this.returnModel(modelSend);
  }

  fnListaArticulos() {
    this.articuloService.listarArticulos().subscribe(req => {
      this.articulos = req;
    });
  }

  fnLoadRealTimeLista() {
    this.notificaRealTime.signalRListarArticulo.subscribe(req => {
      this.articulos = req;
    }, err => {
      console.log(err);
    });
  }

  editar(item: Articulo) {
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
