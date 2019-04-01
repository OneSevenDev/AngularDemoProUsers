import { Component, OnInit } from '@angular/core';
import { NotificaService } from './core/servicios/notifica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appCompas';
  public message: string[] = [];

  constructor(
    private notifica: NotificaService
    ) { }
    ngOnInit(): void {
      this.notifica.emNotificaServicio.subscribe(req => {
        this.message.push(req);
      });
    }
}
