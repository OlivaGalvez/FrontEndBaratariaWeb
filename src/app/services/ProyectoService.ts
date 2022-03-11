import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProyectoModel } from '../model/proyecto.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
 })
export class ProyectoService {

  //myApiUrl = 'http://10.190.0.74:5506/cambio-energetico';
  myApiUrl = 'http://intranetapp1.eurocajarural.es:5506';
  list: ProyectoModel[];

  constructor(private http: HttpClient) { }


  obtenerDatos() {
    return this.http.get<ProyectoModel[]>(this.myApiUrl + '/proyectos');
  }

}
