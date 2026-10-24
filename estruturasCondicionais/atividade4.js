/* Crie um programa que receba a temperatura atual
 e informe como estpa o clima, seguindo estas regras:
 
    - Temperatura maior ou igual a 30 °C: está quente.
    - Temperatura maior ou igual a 20 °C: está agradável.
    - Temperatura menor que 20 °C: está frio.*/

let temp = -90;

if(temp >= 30){
    console.log(`A temperatura está em ${temp}°C, está Quente.`);    
} else if(temp >= 20){
    console.log(`A temperatura está em ${temp}°C, está Agradável.`);  
} else{
    console.log(`A temperatura está em ${temp}°C, está Frio.`);    
}