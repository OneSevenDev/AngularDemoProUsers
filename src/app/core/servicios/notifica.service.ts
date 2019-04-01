import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class NotificaService {
  hubConnection: HubConnection;
  emNotificaServicio: EventEmitter<string> = new EventEmitter();
  constructor() {
    const builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl('http://localhost:52980/message').build();
    this.hubConnection.on('EnviarClientesTodos', message => {
      this.emNotificaServicio.emit(message);
    });
    this.hubConnection.start();
  }
}
