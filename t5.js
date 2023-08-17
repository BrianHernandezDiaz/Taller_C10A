const prompt = require("prompt-sync")({ sigint: true });

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacion (asiaScores, euroScores){
    for(i = 0; i < asiaScores.length; i++) {
        if (euroScores[i] == asiaScores[i]){
            console.log("calificacion en posición "+i+" igual");
        } else {
            console.log("calificacion en posición "+i+" diferente");
        }    
    }   
}
comparacion(asiaScores, euroScores);