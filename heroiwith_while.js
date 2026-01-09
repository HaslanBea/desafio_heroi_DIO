// Sistema de níveis dos heróis usando while

console.log("Iniciando o sistema de níveis dos heróis...");

let nome = "Arthas";
let xp = 0;
let xpFinal = 8500;
let nivel = "";

while (xp <= xpFinal) {

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    xp += 500; // simulando ganho de XP
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

