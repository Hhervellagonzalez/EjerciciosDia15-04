import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3-directivas.component.html',
  styleUrl: './ejercicio3-directivas.component.css'
})
export class Ejercicio3DirectivasComponent {
  genero= ['Mujer' , 'Hombre' , 'Otros'];
  generoSeleccionado: string = ""; 
  nacionalidades = ['Española', 'Francesa', 'Alemana', 'Italiana'];
  nacionalidadSeleccionada: string = "";
  lenguajesProgramacion = ['C++', 'Java', 'JS', 'Python'];
  lenguajesSeleccionados: string[] = [];

  mostrarInfo() {
  
    const informacion = `
      Género: ${this.generoSeleccionado}
      Nacionalidad: ${this.nacionalidadSeleccionada}
      Lenguajes de Programación: ${this.lenguajesProgramacion}
    `;
    alert(informacion);
  }

}
