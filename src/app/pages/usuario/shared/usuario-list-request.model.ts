export class UsuarioListRequest {
    constructor(
        public idusuario: number = 0,
        public login: string = '',
        public nombrecompleto: string = '',
        public idtipousuario: number = 0,
        public nombretipousuario: string = ''
    ) {}
}
