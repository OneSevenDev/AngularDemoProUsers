import { TIPOPAGINA } from 'src/app/core/comunes/enum.comunes';
import { Articulo } from './articulo.model';


export class ArticuloDataModel {
    constructor(
        public tipopagina: TIPOPAGINA,
        public articulo: Articulo
    ) {}
}
