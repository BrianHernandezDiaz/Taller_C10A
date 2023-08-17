const prompt = require("prompt-sync")({ sigint: true });


let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); //undefined

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ];
console.log(grupoDeAmigos[5]); //ironman

let str = "un string cualquiera";
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ];
console.log(arrayAleatorio[arrayAleatorio.length - 1]); //str

    