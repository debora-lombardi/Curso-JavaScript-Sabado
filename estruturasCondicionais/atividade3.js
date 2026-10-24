/* Crie um porgramaque receba a idade de uma pessoa e 
 verifique se ela é criança, adolecente ou adulta.
 
 O programa de ve seguir estas regras:
  - Menor de 12 anos: criança.
  - De 12 a 17 anos: adolecente.
  - 18 anos ou mais: adulto. */

let idade = 180;

if(idade < 12){
    console.log(`É uma Criança!`);    
} else if(idade <= 17){
    console.log(`É um Adolecente!`);  
}else{
    console.log(`É um Adulto!`);    
}