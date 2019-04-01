import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
