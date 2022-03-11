import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, catchError, take } from 'rxjs/operators';
import { ProyectoModel } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/ProyectoService';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  proyectos: ProyectoModel[];
  constructor(public proyectoServices: ProyectoService, /*private httpClient: HttpClient,*/  private ref: ChangeDetectorRef) {
    this.obtenerDatos();
  }

  ngOnInit(): void {
    console.log("Iniciando el componente")
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };


  }

  obtenerDatos() {
      this.proyectoServices.obtenerDatos()
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.proyectos = data;
        // this.ref.detectChanges();
      }
    )
  }


}
