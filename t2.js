const prompt = require("prompt-sync")({ sigint: true });

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculas_mayus = [];

function amayuscula(peliculas) {
  for (let i = 0; i < peliculas.length; i++){
    peliculas_mayus.push(peliculas[i].toUpperCase());
  }
}

amayuscula(peliculas);
console.log(peliculas_mayus);



