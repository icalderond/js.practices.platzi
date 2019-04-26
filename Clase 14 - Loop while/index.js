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

const INCREMENTO_PESO = 0.3
const DIAS_EN_UN_AÑO = 365

const aumentarDePeso=persona => persona.peso += INCREMENTO_PESO
const disminuirDePeso=persona => persona.peso -= INCREMENTO_PESO
const comeMucho=() => Math.random() < 0.3
const realizaDeporte=() => Math.random() < 0.4

const META = israel.peso - 3

var dias = 0
while (israel.peso > META) {
  // debugger
  if (comeMucho()) {
    //aumentar de peso
    aumentarDePeso(israel)
  }
  if (realizaDeporte()) {
    //Adelgazar
    disminuirDePeso(israel)
  }
  dias++
}
console.log(`Pasaron ${dias} dias hasta que ${israel.nombre} adelgazo ${META} Kilogramos`);
