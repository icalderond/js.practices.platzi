/*
En esta clase empezaremos a trabajar con estructuras de control,
éstas nos permiten decidir el flujo de nuestro código.
Empezaremos con los condiconales. Los condicionales nos permiten
decidir si un código se ejecuta o no.
También introducimos un nuevo tipo de datos primitivos: el booleano, que determina
si un valor es falso o verdadero. Mediante un condicional (if) decidiremos si se
ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.
*/
var israel = {
  nombre:'Israel',
  apellido:'Calderon',
  edad: 31,
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
imprimirProfesiones(israel)

function ImprimirSiEsMayorDeEdad(persona) {
  if(persona.edad>=18){
    console.log(`${persona.nombre} es MAYOR de edad`)
  }else {
      console.log(`${persona.nombre} es MENOR de edad`)
  }
}
ImprimirSiEsMayorDeEdad(israel)
