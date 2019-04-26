/*
En esta clase estudiaremos una de las estructuras básicas de control.
El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle,
y dentro los paŕentesis irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.
*/
var israel = {
  nombre:'Israel',
  apellido:'Calderon',
  edad: 31,
  peso:75
}

console.log(`Al inicio del año ${israel.nombre} pesa ${israel.peso} Kilogramos`);

const INCREMENTO_PESO = 0.2
const DIAS_EN_UN_AÑO = 365

const aumentarDePeso=persona => persona.peso += INCREMENTO_PESO
const disminuirDePeso=persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_EN_UN_AÑO; i++) {
  var random = Math.random() //Da valores entre 0 y 1

  if(random < 0.25){
    //aumentar de peso
    aumentarDePeso(israel)
  }else if(random < 0.50) {
    //adelgazar
    disminuirDePeso(israel)
  }
}

console.log(`Al final del año ${israel.nombre} pesa ${israel.peso.toFixed(1)} Kilogramos`);
