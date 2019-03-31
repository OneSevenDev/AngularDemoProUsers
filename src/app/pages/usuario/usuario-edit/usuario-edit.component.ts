import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {
  @Input() tipopagina: number;
  @Input() usuario: Usuario;
  @Output() cambiarPagina: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('tipo pagina', this.tipopagina);
    console.log('usuario', this.usuario);
  }

  regresar() {
    this.cambiarPagina.emit(3);
  }

}
