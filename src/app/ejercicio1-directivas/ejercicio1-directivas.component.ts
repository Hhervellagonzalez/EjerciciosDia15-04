import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1-directivas.component.html',
  styleUrl: './ejercicio1-directivas.component.css'
})
export class Ejercicio1DirectivasComponent {
Ram = ['RAM32', 'RAM16', 'RAM8'];
Procesador = ['Corei9','Corei7','Corei5']
Grafica = true;
DiscosDuros = ['HDD' , 'SSD']
Alimentacion = ['600', '700', '800']

selectedRam: string = "";
selectedProcessor: string = "";
includeGraphicsCard: boolean = true; 
selectedHardDrive: string = "";
selectedPowerSupply: string = "";


  mostrarInfo() {
    const informacion = `
      RAM: ${this.selectedRam}
      Procesador: ${this.selectedProcessor}
      Tarjeta Gráfica: ${this.includeGraphicsCard}
      Disco Duro: ${this.selectedHardDrive}
      Fuente de Alimentación: ${this.selectedPowerSupply}
    `;
    alert(informacion);
  }
}
