/* Crie um programa que receba um saldo de uma conta bancaria
 e informe a situação financeira do cliente.

 O programa deve seguir estas regras:
    - Saldo maior que R$ 0: exibir "Saldo positivo".
    - Saldo igual a R$ 0: exibir "Saldo zerado".
    - Saldo menor que R$ 0: exibir "Saldo negativo". */

let saldo = -1;

if(saldo > 0){
    console.log("Saldo Positivo.");    
} else if(saldo == 0){
    console.log("Saldo Zerado.")
} else{
    console.log("Saldo Negativo.")
}