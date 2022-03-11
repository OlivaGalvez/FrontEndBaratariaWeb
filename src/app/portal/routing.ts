import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const Routing: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'normativa',
    loadChildren: () =>
      import('./normativa/normativa.module').then((m) => m.NormativaModule),
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
