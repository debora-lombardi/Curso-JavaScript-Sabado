/* - Uma Loja deseja criar um programa para calcular o
 desconto de seus clientes  de acordo com o valor total da compra.
 
 O programa deve receber o valir da compra e aplicar ad seguintes regras:
    - Se a compra for maior ou igual a R$ 200, calcular um desconto de 20%.
    - Se a compra dor maior ou igual a R$ 100, calcular um desconto de 10%.
    - Se a compra for menor que R$ 100, não haverá desconto 

 Mostre o valor do desconto e o valr final a pagar*/

let valorCompra = 500;
let desconto = null;
let valorFinal = null;


if(valorCompra >= 200){
    desconto = valorCompra * 0.20;
} else if(valorCompra >= 100){
    desconto = valorCompra * 0.10;
} else{
    desconto = 0;
}

valorFinal = valorCompra - desconto;

console.log(`O valor final da compra: R$ ${valorFinal}`);
console.log(`O valor do desconto: R$ ${desconto}`);


