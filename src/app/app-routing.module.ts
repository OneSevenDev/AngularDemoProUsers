import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PageNoFoundComponent } from './shared/page-no-found/page-no-found.component';
import { InicioSessionComponent } from './shared/inicio-session/inicio-session.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioModule' },
      { path: 'articulo', loadChildren: './pages/articulo/articulo.module#ArticuloModule' },
    ]
  },
  { path: 'login', component: InicioSessionComponent },
  { path: '**', component: PageNoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
