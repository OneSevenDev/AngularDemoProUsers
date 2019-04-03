import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Articulo } from 'src/app/pages/articulo/shared/articulo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificaService {
  hubConnection: HubConnection;
  emNotificaServicio: EventEmitter<string> = new EventEmitter();
  signalRListarArticulo: EventEmitter<Articulo[]> = new EventEmitter();
  constructor(
    private http: HttpClient
  ) {
    const builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl(environment.urlSignalR + 'hupProxySignalR').build();
    this.hubConnection.on('EnviarClientesTodos', message => {
      this.emNotificaServicio.emit(message);
    });
    this.hubConnection.on('ListarArticulosTodos', response => {
      this.signalRListarArticulo.emit(response);
    });
    this.hubConnection.start();
  }

  actualizarArticulosRealTime(articulo: Articulo): Observable<any> {
    const sendData = JSON.stringify(articulo);

    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');

    return this.http.put(environment.urlBackend + 'notifica/actualiza', sendData, { headers: header });
  }

  insertaArticulosRealTime(articulo: Articulo): Observable<any> {
    const sendData = JSON.stringify(articulo);

    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');

    return this.http.post(environment.urlBackend + 'notifica/insertar', sendData, { headers: header });
  }
}
