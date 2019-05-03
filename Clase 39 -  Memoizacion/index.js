/*
MEMOIZACION
La memoizacion es una técnica que se usa para acelerar el cómputo de una función
cuando:

La función retorna siempre el mismo valor cuando se le pasa la misma lista de
argumentos (es pura, no depende de efectos laterales)
Tenemos razones para creer que la función será llamada con los mismos argumentos
muchas veces
La función tarda bastante en computar el resultado

!6 = 6 * 5 * 4 * 3 * 2 * 1

this.cache
Esto es para ya no hacer el mismo calculo si no guardarlo para su posterior uso
*/
var fact_seis = 6 * 5 * 4 * 3 * 2 * 1

function factorial(numero) {
  if (!this.cache) {
    this.cache = {}
  }

  if (this.cache[numero]) {
    debugger
    return this.cache[numero]
  }

  //Caso base
  if(numero === 1){
    return 1;
  }

  this.cache[numero] = numero * factorial(numero-1)
  return this.cache[numero]
}

console.log(factorial(6));
