import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioListRequest } from '../shared/usuario-list-request.model';
import { UsuarioDataModel } from '../shared/usuario-data.model';
import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  @Output() cambiarPagina: EventEmitter<UsuarioDataModel> = new EventEmitter();
  usuarios: UsuarioListRequest[];

  constructor(
    private usuariosService: UsuarioService
  ) { }

  ngOnInit() {
    this.listar();
  }

  notificar(model: UsuarioDataModel) {
    this.cambiarPagina.emit(model);
  }

  nuevo() {
    const user: UsuarioDataModel = {
      tipopagina: TIPOPAGINA.nuevo,
      usuario: null
    };
    this.notificar(user);
  }

  editar(item: UsuarioListRequest) {
    this.usuariosService.recuperar(String(item.idusuario)).subscribe(req => {

      const userModel: UsuarioDataModel = {
        tipopagina: TIPOPAGINA.editar,
        usuario: req
      };
      this.notificar(userModel);
    });
    // const user: Usuario = {
    //   idusuario: item.idusuario,
    //   login: item.login,
    //   nombrecompleto: item.nombrecompleto,
    //   rutaimagen: '',
    //   idtiposuaurio: item.idtipousuario
    // };
  }

  listar() {
    this.usuariosService.listar().subscribe(req => {
      this.usuarios = req;
    }, err => {
      this.usuarios = [
        { idusuario: null, login: '', nombrecompleto: '', idtipousuario: null, nombretipousuario: '' },
      ];
    });
  }

}
