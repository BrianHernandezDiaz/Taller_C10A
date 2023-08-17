const prompt = require("prompt-sync")({ sigint: true });


let arreglo = [1,4,5];

function imprimirinverso(arreglo){
    for (i = (arreglo.length - 1); i >= 0; i-- ){
        console.log(arreglo[i]);
    }
}
imprimirinverso(arreglo);




    
    
