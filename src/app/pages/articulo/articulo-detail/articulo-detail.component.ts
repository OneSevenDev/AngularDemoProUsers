import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { ArticuloDataModel } from '../shared/articulo-data.model';
import { Articulo } from '../shared/articulo.model';
import { NgForm } from '@angular/forms';
import { NotificaService } from 'src/app/core/servicios/notifica.service';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.scss']
})
export class ArticuloDetailComponent implements OnInit {
  @Input() articuloSelected: Articulo;
  @Output() changePage: EventEmitter<ArticuloDataModel> = new EventEmitter();
  title: string;

  constructor(
    private realtime: NotificaService
  ) {
    if (this.articuloSelected) {
      this.title = 'Nuevo Articulo';
    } else {
      this.title = 'Modificar Articulo';
    }
   }

  ngOnInit() {
  }
  regresar() {
    this.returnModel();
  }
  grabarNg(form: NgForm) {
    if (this.articuloSelected.codigo === 0) {
      this.realtime.insertaArticulosRealTime(this.articuloSelected).subscribe(response => {
        console.log(response);
      }, err => {
        console.log(err);
      });
    } else {
      this.realtime.actualizarArticulosRealTime(this.articuloSelected).subscribe(response => {
        console.log(response);
      }, err => {
        console.log(err);
      });
    }
    this.returnModel();
  }
  returnModel() {
    const setModel: ArticuloDataModel = { tipopagina: TIPOPAGINA.listar, articulo: null };
    this.changePage.emit(setModel);
  }
}
