const prompt = require("prompt-sync")({ sigint: true });


let arreglo = [1,4,5];
let arregloinverso =[];

function inversor(arreglo){
    for (i = 0; i < arreglo.length; i++){
        arregloinverso.unshift(arreglo[i]);
    }
console.log(arregloinverso);
}
inversor(arreglo);




    
    
