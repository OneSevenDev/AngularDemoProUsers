import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { Usuario } from './usuario.model';

export class UsuarioDataModel {
    constructor(
        public tipopagina: TIPOPAGINA,
        public usuario: Usuario
    ) {}
}
