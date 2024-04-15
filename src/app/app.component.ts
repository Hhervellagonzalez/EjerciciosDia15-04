import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1InterfacesComponent } from './ejercicio1-interfaces/ejercicio1-interfaces.component';
import { Ejercicio1DirectivasComponent } from './ejercicio1-directivas/ejercicio1-directivas.component';
import { Ejercicio2DirectivasComponent } from './ejercicio2-directivas/ejercicio2-directivas.component';
import { Ejercicio3DirectivasComponent } from './ejercicio3-directivas/ejercicio3-directivas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ejercicio1InterfacesComponent, Ejercicio1DirectivasComponent, Ejercicio2DirectivasComponent, Ejercicio3DirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosDia15-04';
}
