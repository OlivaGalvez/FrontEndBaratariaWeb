import { Routes } from '@angular/router';
import { ListadoActividadesComponent } from './actividades/listado-actividades/listado-actividades.component';
import { NuevaActividadComponent } from './actividades/nueva-actividad/nueva-actividad.component';
import { InicioComponent } from './inicio/inicio.component';

const Routing: Routes = [

  { path: 'inicio', component: InicioComponent },
  {
    path: 'actividad/listado', component: ListadoActividadesComponent
  },
  {
    path: 'actividad/nueva', component: NuevaActividadComponent
  },
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
