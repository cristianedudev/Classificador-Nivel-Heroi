const prompt = require('prompt-sync')();

let nameHero= prompt("Digite o nome do heroi \n");
let nivel = parseInt(prompt("Qual o nivel do seu herois? \n"))
let rank;

if(nivel <= 1000){
    rank = "FERRO";
}else if (nivel > 1000 && nivel <= 2000){
    rank = "BRONZE";
}else if (nivel > 2000 && nivel <= 5000){
    rank = "PRATA";
}else if (nivel > 5000 && nivel <= 7000){
    rank = "OURO";
}else if (nivel > 7000 && nivel <= 8000){
    rank = "PLATINA";
}else if (nivel > 8000 && nivel <= 9000){
    rank = "ASCENDENTE";
}else if(nivel > 9000 && nivel <= 10000){
    rank = "IMORTAL";
}else{
    rank = "RADIANTE";
}
console.log("O Heroi de nome "+nameHero+" está no nivel "+nivel+ " e está no rank: "+rank);