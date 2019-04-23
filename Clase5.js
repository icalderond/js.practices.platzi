// Variable de alcance global
//Esta variable es global y se encuentra en window.nombre
var nombre = 'Israel'
function ImprimirMayusculas() {
  nombre=nombre.toUpperCase()
  console.log(nombre);
}
// ImprimirMayusculas()
// ====================================
//De esta manera no se modifica la variable global
function ImprimirMayusculas_param(n) {
  n=n.toUpperCase()
  console.log(n);
}
// ImprimirMayusculas_param(nombre)
// ====================================
//Accediendo a la variable local sin modificar la global
function ImprimirMayusculas_variableLocal(nombre) {
  nombre=nombre.toUpperCase()
  console.log(nombre);

  //Se puede acceder a la variable a travez de window.nombre
  console.log(window.nombre);
}
ImprimirMayusculas_variableLocal(nombre)
