var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8
var personas = [sacha,alan,martin,dario,vicky,paula]
var personasAltas = personas.filter(esAlta);

// var pasaAlturasCms = persona => {
//    return {
//      ...persona,//Esto es para un nuevo objeto con un valor diferente en altura
//      altura: persona.altura * 100
//    }
// }
//Esto es lo mismo que la funcion anterior (se agregaron parenesis y se quito el return)
var pasaAlturasCms = persona => (
    {
     ...persona,//Esto es para un nuevo objeto con un valor diferente en altura
     altura: persona.altura * 100
   }
 )

var personasCms = personas.map(pasaAlturasCms)
console.log(personasCms);
