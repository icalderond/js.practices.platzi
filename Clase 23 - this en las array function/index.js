//Prototipo Persona
function Persona(nombre,apellido,altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = 20 //Valor definido
  this.altura = altura
}

//Siempre definir los prototipos arriba para no tener errores de definicion
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
// Persona.prototype.soyAlto = () => {
//   // debugger
//   //this = window en las arrow funtions
//   return this.altura > 1.8;
// }

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
}

var sacha = new Persona('Sacha','Lifszyc',1.72)
var ericka = new Persona('Ericka','Luna',1.65)
var arturo = new Persona('Arturo', 'Martinez',1.89)

//Esto nos regresa todo falso en consola
sacha.soyAlto()
ericka.soyAlto()
arturo.soyAlto()
