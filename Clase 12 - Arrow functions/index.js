/*
En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura
más corta para escribir expresiones de funciones. Este tipo de funciones deben
definirse antes de ser utilizadas.
Al escribir las Arrow Functions no es necesario escribir la palabra function,
la palabra return, ni las llaves.
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

//Esta es una funcion anonima y se invoca asi esMayorDeEdad(persona)

//Primera forma de hacerlo
// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

//Segunda forma de hacerlo
// const esMayorDeEdad =  (persona) => {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

//Tercera forma de hacerlo
// const esMayorDeEdad =  persona => persona.edad >= MAYORIA_DE_EDAD

//Cuarta forma de hacerlo
const esMayorDeEdad =  ({edad}) => edad >= MAYORIA_DE_EDAD

function ImprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es MAYOR de edad`)
  }else {
    console.log(`${persona.nombre} es MENOR de edad`)
  }
}

function permitirAcceso(persona) {
  if(esMenorDeEdad(persona)){
    console.log(`Acceso denegado para ${persona.nombre}`);
  }
}

//RETO
const esMenorDeEdad= ({edad}) => edad < MAYORIA_DE_EDAD
