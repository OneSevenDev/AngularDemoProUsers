import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsuarioDataModel } from './shared/usuario-data.model';
import { Usuario } from './shared/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarioBase: Usuario;
  numeroPagina: number;
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    this.numeroPagina = 3;
  }

  ngOnInit() {
  }

  cambiarPagina(pagina: number) {
    this.numeroPagina = pagina;
  }

  refrescarPagina(data: UsuarioDataModel) {
    this.numeroPagina = data.tipopagina;
    this.usuarioBase = data.usuario;
    this.changeDetector.detectChanges();
  }

  ejecutarCambio(pagina: number) {
    this.numeroPagina = pagina;
    this.changeDetector.detectChanges();
  }
}
