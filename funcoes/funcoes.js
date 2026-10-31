// ----------- Função Simples -----------

// function nomeDaFuncao(){
//     console.log("Bom dia!");
//     console.log("Boa tarde!");
//     console.log("Boa noite!");
//     console.log("---------------");    
// }

// nomeDaFuncao()


// function boasVindas(){
//     console.log("Seja bem-vindo ao JavaScript");    
// }

// boasVindas()

// function dizerOla(){
//     console.log("Olá!!");    
// }

// dizerOla()

/* Crie uma função chamada mostrarCurso()
  que exibe no console:
    "Curso: Desenvolvedor Web com JavaScript" */

// function mostrarCurso(){
//     console.log("Curso: Desenvolvedor Web com JavaScript");    
// }

// mostrarCurso()

// function fazerSuco(){
//     console.log("Suco de laranja");    
// }

// fazerSuco()

/* ----------- Fonção Com Parametro ----------- */

// function fazerSuco(sabor){
//     console.log(`Fazendo suco de ${sabor}.`);    
// }

// fazerSuco("Uvaia")

// function somar(n1, n2){
//     let result = n1 + n2
//     console.log(`${n1} + ${n2} = ${result} `)
// }

// somar(1,2)
// somar(4,5)

/* Crie uma função chamada saudarPessoa(nome)
  que receba o nome de uma pesosa como 
  parâmetro e exiba a mensagem:
   "Olá, [nome]! Saja ben-vindo(a)!" */

// function saudarPessoa(nome){
//     console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);    
// }

// saudarPessoa("Nita")

/* Crie uma função chamada dobro(numero)
  que receba um número como parâmetro e 
  exiba o dobro desse número no console */

// function dobro(numero){
//     let dobro = numero * 2
//     console.log(`O dobro desse número é: ${dobro}`);
    
// }

// dobro(5)

// function nomeDaFuncao(){
//     return result
// }

// function dobrar(n){
//     return n *2
// }

// let result = dobrar(3)

// console.log(result);


/* Crie uma função chamada triplo(numero)
  que receba um número e retorne o triplo dele */

// function triplo(n){
//    return n * 3
// }

// let result = triplo(2)

// console.log(result)

/* Crie uma função chamada nomeCompleto(nome, sobrenome)
  que retorne o nome completo (nome + sobrenome */

// function nomeCompleto(nome, sobrenome){
//     return nome + " " + sobrenome     
// }

// console.log(nomeCompleto("Nita", "Santos"));
 

/* Crie uma função chamada celsiusParaFahrenheit(celsius)
que converta e retorne a temperatura em Fahrenheit.
  a formula é: F = C * 1.8 + 32 */

// function celsiusParaFahrenheit(c){
//     return c * 1.8 + 32 
// }

// console.log(celsiusParaFahrenheit(37).toFixed(2));

/* ----------------------- Arrow Functions ----------------------- */

// const sudacao = () =>{
//     console.log("Olá!")
// }

// sudacao()

// const dobrar = (n) => n * 2

// let result = dobrar(4)

// console.log(result)

/* Crie uma **Arrow Finction**
  chamada `multiplicar` que recebe dois números.
  Ela deve **retornar** a multiplicação dos
  dois valores
    - Teste chamando a multiplicação (7,3). */

const multiplicar = (n1, n2) => n1 * n2

let result = multiplicar(7, 3)

console.log(result);