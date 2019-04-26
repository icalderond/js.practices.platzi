/*
Otra estructura repetitiva es el do-while. A diferencia de la instrucción while,
un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.
Reto, resuelve el bug que tiene el ejercicio.
*/

var contador = 0

const llueve = () => Math.random() < 0.25
const imprimirSiLlueve = (cont)=>{
  if(cont === 1){
    console.log(`Fui a ver si llovia ${cont} vez`);
  }else {
    console.log(`Fui a ver si llovia ${cont} veces`);
  }
}

do {
  contador++
} while (!llueve());
imprimirSiLlueve(contador)
