import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.http.get(environment.urlBackend + 'usuario/listar');
  }

  recuperar(id: string): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('id', id);
    return this.http.get(environment.urlBackend + 'usuario/Obtener', { params: parametros });
  }
}
