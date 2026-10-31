// let idades = [15, 23, 21, 28, 17]

// console.table(idades)

// console.log(idades[1])
// console.log(idades[3])
// console.log(idades[4])
// console.log(idades[0])

// let frutas = ["Morango","Uva" ,"Maçã", "Pera"]
// frutas.unshift("Abacaxi") /* ["Morango", "Maçã", "Pera"] (Adiciona no começo) */ 
// frutas.push("Uvaia")  /* ["Morango", "Maçã", "Pera", "Uvaia"] (Adiciona no final) */
// frutas.splice(2, 0, "Acerola") /* ["Morango", "Maçã","Acerola" , "Pera", "Uvaia"] */
// frutas.pop() /* Remove o Ultimo */
// frutas.shift() /* Remove o primeiro */
// frutas.splice(1, 3) /* Adiciona ou Remove em qualquer lugar */
// console.log(frutas.length);

/* ----------------------- ForEach ----------------------- */


let nomes = ["Matheus", "Ana", "Igor", "João", "Alice", "Marcos"]

nomes.forEach((elemento) =>{
    console.log(`Bom dia ${elemento}`)
})
