import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { GestionRoutingModule } from './gestion-routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from '../guard/auth.guard';
import { AuthService } from '../modules/auth';
import { initializer } from '../init/app-init';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    CommonModule,
    GestionRoutingModule
  ],
})
export class GestionModule { }
