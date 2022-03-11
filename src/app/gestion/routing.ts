import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const Routing: Routes = [

  { path: 'inicio', component: InicioComponent },
  {
    path: '',
    redirectTo: '/admin/inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
