export interface Loan {
    principal : number;
    interestRate : number;
}

export interface ConventionalLoan extends Loan{
    months : number;
}