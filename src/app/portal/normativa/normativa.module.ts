import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../../_metronic_portal/partials';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { CondicionesUsoComponent } from './condiciones-uso/condiciones-uso.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';

@NgModule({
  declarations: [AvisoLegalComponent, CondicionesUsoComponent, PoliticaPrivacidadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'aviso-legal',
        component: AvisoLegalComponent,
      },
      {
        path: 'condiciones-de-uso',
        component: CondicionesUsoComponent,
      },
      {
        path: 'politica-de-privacidad',
        component: PoliticaPrivacidadComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class NormativaModule {}
