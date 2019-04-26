/*Existen varias maneras de comparar variables u objetos dentro de javascript.
En el primer ejemplo le asignamos a X un valor numérico y a Y un string.
Para poder compararlos debemos agregar dos signos de igual (==).
Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===).
Esto permite que JavasScript no iguale las variables que son de distinto tipo.
Te recomendamos que uses el triple igual siempre que estés comparando variables.
Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
*/
var x = 4, y = '4'

//== los convierte al mismo tipo de dato
var result=x==y

//Comparar que sean del mismo tipo y el mismo valor
//Siempre que podamos utilizar el triple igual
result=x===y


// ======================Comparando objetos=====
//First example
var sacha = {
  nombre: 'Sacha'
}
var otraPersona = {
  nombre:'Sacha'
}
//Pregunta la referencia a la variable
result=sacha==otraPersona

//==Second example
//Apunta a la misma locacion de memoria
//En este caso si se modifica otraPersona se modificara tambien en el original
otraPersona=sacha;
result=sacha===otraPersona

//Thirs example
otraPersona = {
  ...sacha
}
result=sacha===otraPersona


console.log(result);
