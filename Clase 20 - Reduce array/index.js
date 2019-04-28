var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({altura}) => altura > 1.8
var personas = [sacha,alan,martin,dario,vicky,paula]
var personasAltas = personas.filter(esAlta);

var pasaAlturasCms = persona => (
    {
     ...persona,//Esto es para un nuevo objeto con un valor diferente en altura
     altura: persona.altura * 100
   }
 )

var personasCms = personas.map(pasaAlturasCms)
// ========

//Forma original de hacerlo
// var acum = 0
// for (var i = 0; i < personas.length; i++) {
//   acum += personas[i].cantidadDeLibros
// }

const reducer = (acum,{cantidadDeLibros}) =>  acum + cantidadDeLibros;

//reduce ([functions], [Initial value])
var totalLibros = personas.reduce(reducer, 0)
console.log(`En total todos tienen ${totalLibros} libros`);
