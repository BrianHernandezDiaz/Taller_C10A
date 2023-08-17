const prompt = require("prompt-sync")({ sigint: true });


let arreglo = ["h", "o", "l", "a"];
let suma =0;
let juntada = "";

function joinarreglo(arreglo){
    for (i = 0; i < arreglo.length; i++){
        juntada = juntada + arreglo[i];
    }
console.log(juntada);
}
joinarreglo(arreglo);




    
    
