var nombre = 'Israel', apellido = 'Calderón'

// Variables String
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoMinusculas = apellido.toLowerCase();
var primeraLetraNombre=nombre.charAt(0);
var cantidadLetrasNombre = nombre.length;

//Concatenar dos String
var nombreCompleto = nombre+' '+apellido
var nombreCompletoInterpolacion = `${nombre} ${apellido}`;

var substring = nombre.substr(2,2);
