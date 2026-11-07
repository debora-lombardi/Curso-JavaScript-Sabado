// const paragrafo = document.getElementById("paragrafo");

// const paragrafo2 = document.getElementById("paragrafo2");

// const paragrafo3 = document.getElementById("paragrafo3");

// const paragrafo4 = document.getElementById("paragrafo4");

// console.log(paragrafo);
// console.log(paragrafo2);
// console.log(paragrafo3);
// console.log(paragrafo4);


// --------------------------------------------------------

// const title = document.getElementById("title");

// title.innerText = "Feijão";

// const paragrafo5 = document.getElementById("paragrafo5");

// // paragrafo5.innerText = "Troquei";

// paragrafo5.style.color = "pink";
// paragrafo5.style.fontSize = "90px";
// paragrafo5.style.backgroundColor = "red";

// const paragrafo6 = document.getElementById("paragrafo6");

// paragrafo6.style.color = "yellow";
// paragrafo6.style.fontSize = "70px";
// paragrafo6.style.backgroundColor = "orange";

// --------------------------------------------------------

// const paragrafo7 = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Deu bom!"
//     paragrafo.style.color = "#168aad"
//     alert("Deu certooo!!")
// })

/* Crie um parágrafo com um ID e um botão.
   Quando o botão for clicado, o texto do parágrafo 
   deve ser alterado para:
    "Texto alterado com sucesso!"  */

// const paragrafo8 = document.getElementById("paragrafo8")
// const btn2 = document.getElementById("btn2")

// btn2.addEventListener("click", function(){
//     paragrafo8.innerText = "Texto alterado com sucesso!"
// })

// --------------------------------------------------------

// const paragrafo9 = document.getElementById("paragrafo9")
// const btn3 = document.getElementById("btn3")
// const img = document.getElementById("img")

// btn3.addEventListener("click", function(){
//     paragrafo9.innerText = "Texto alterado com sucesso!"
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsV7mzCAg8JlprM9oCB-IGEi4BgmFjcPgP4wYB6qWj4Q&s=10"

// })

// --------------------------------------------------------

// document.addEventListener("keydown", function(e){
//     alert(e.key)
// })

document.addEventListener("keydown", function(e){

    // switch (e.key){
    //     case "r": 
    //         document.body.style.backgroundColor = "red"
    //         break;
    //     case "g":
    //         document.body.style.backgroundColor = "green"
    //         break;
    //     case "b":
    //         document.body.style.backgroundColor = "blue"
    //         break;
    //     default: 
    //         document.body.style.backgroundColor = "white";
    // }
    
    if(e.key == "r"){
        document.body.style.backgroundColor = "red"
    }else if(e.key == "g"){
        document.body.style.backgroundColor = "green"
    }else if(e.key == "b"){
        document.body.style.backgroundColor = "blue"
    }else{
        document.body.style.backgroundColor = "white";
    }  
})