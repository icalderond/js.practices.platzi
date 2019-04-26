/*
En esta clase seguiremos trabajando con condicionales para desglosar las funciones
en funciones más pequeñas que retornen un valor.
Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad.
 Para ello utilizamos los símbolos >=.
Return detiene la ejecución de una función y devuelve el valor de esa función.
Las variables definidas con const se comportan como las variables, excepto que
no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas
o minúsculas. Pero por convención, para distinguirlas del resto de variables,
se escribe todo en mayusculas.
*/
var israel = {
  nombre:'Israel',
  apellido:'Calderon',
  edad: 17,
  ingeniero:false,
  cocinero:false,
  cantante:true,
  dj:false,
  guitarrista:false,
  profesional:false
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if(persona.ingeniero){
    console.log('Ingeniero');
  }else {
    console.log('No es Ingeniero');
  }
  if(persona.cocinero){
    console.log('Cocinero');
  }
  if(persona.cantante){
    console.log('Cantante');
  }
  if(persona.dj){
    console.log('Dj');
  }
  if(persona.guitarrista){
    console.log('Guitarrista');
  }
  if(persona.profesional){
    console.log('Profesional');
  }
}
// imprimirProfesiones(israel)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function ImprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es MAYOR de edad`)
  }else {
    console.log(`${persona.nombre} es MENOR de edad`)
  }
}
ImprimirSiEsMayorDeEdad(israel)
