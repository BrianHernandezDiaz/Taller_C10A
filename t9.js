const prompt = require("prompt-sync")({ sigint: true });


let arreglo = [1,55,-1];
let suma =0;

function sumaarreglo(arreglo){
    for (i = 0; i < arreglo.length; i++){
        suma = suma + arreglo[i];
    }
console.log(suma);
}
sumaarreglo(arreglo);




    
    
