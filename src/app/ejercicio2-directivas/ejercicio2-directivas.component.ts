import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2-directivas.component.html',
  styleUrl: './ejercicio2-directivas.component.css'
})
export class Ejercicio2DirectivasComponent {
  origenes = ['Madrid', 'Barcelona', 'Valencia'];
  destinos = ['Bilbao', 'Sevilla', 'Granada'];
  
  selectedOrigen: string = "";
  selectedDestino: string = "";
  fechaIda: string = "";
  fechaVuelta: string = "";
  numeroPasajeros: number = 1;
  
  mostrarInfo() {
    const informacion = `
      Origen: ${this.selectedOrigen}
      Destino: ${this.selectedDestino}
      Fecha de Ida: ${this.fechaIda}
      Fecha de Vuelta: ${this.fechaVuelta}
      Número de pasajeros: ${this.numeroPasajeros}
    `;
    alert(informacion);
  }
}
