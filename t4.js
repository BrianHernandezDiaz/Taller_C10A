const prompt = require("prompt-sync")({ sigint: true });

let peliculas1 =["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let enmayus =[]

let juego = peliculas2.pop();


function amayus (peliculas1, peliculas2){
    todaspelis = peliculas1.concat(peliculas2);
    for(i=0; i<todaspelis.length; i++){
        enmayus.push(todaspelis[i].toUpperCase());
    }
}
amayus(peliculas1, peliculas2);
console.log(enmayus);