import { Component } from '@angular/core';
import { ConventionalLoan, Loan } from '../_modelo/Loan';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1-interfaces',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1-interfaces.component.html',
  styleUrl: './ejercicio1-interfaces.component.css'
})
export class Ejercicio1InterfacesComponent {
  interesLoan: Loan = {
    principal: 30000,
    interestRate: 5
  };

  conventionalLoan: ConventionalLoan = {
    principal: 30000,
    interestRate: 5,
    months: 180
  };

  interesPago: string = "";
  conventionalPago: string = "";

  ngOnInit() {
    this.interesPago = this.calculateInterestOnlyLoanPayment(this.interesLoan);
    this.conventionalPago = this.calculateConventionalLoanPayment(this.conventionalLoan);
    console.log(this.interesPago); // Devuelve "The interest only loan payment is 125.00"
    console.log(this.conventionalPago); // Returns "The conventional loan payment is 237.24"
  }

  calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let interest = loanTerms.interestRate / 1200;
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
  }

  calculateConventionalLoanPayment(conventionalLoan: ConventionalLoan): string {
    let interest = conventionalLoan.interestRate / 1200;
    let payment = conventionalLoan.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoan.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
  }
}


