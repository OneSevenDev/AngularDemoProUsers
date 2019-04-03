import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient
  ) { }

  listarArticulos(): Observable<any> {
    return this.http.get(environment.urlBackend + 'articulo/listar');
  }

  recuperarArticulo(id: string): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('id', id);
    return this.http.get(environment.urlBackend + 'articulo/recuperar', { params: parametros });
  }
}
