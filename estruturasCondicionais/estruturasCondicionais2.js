// // Switch

// let dia = 2;

// switch (dia) {
//     case 1:
//         console.log("Domingo.");
//         break;
//     case 2:
//         console.log("Segunda.");
//         break;
//     case 3:
//         console.log("Terça.");
//         break;
//     case 4:
//         console.log("Quarta.");
//         break;
//     case 5:
//         console.log("Quinta.");
//         break;
//     case 6:
//         console.log("Sexta.");
//         break;
//     case 7:
//         console.log("Sábado.");
//         break;

//     default:
//         console.log("Opção inválida!");        
// }

/* Faça um sistema de semáforo:
    vermelho -> Pare! 
    amarelo -> Atenção!
    verde -> Pode passar!
    outro -> Cor desconhecida*/


let est = "verde";

switch(est){
    case "vermelho":
        console.log("Pare!");
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "verde":
        console.log("Pode passar!");
        break;
    default:
        console.log("Cor desconhecida!");       
}
