//Prototipo Persona
function Persona(nombre,apellido,altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = 20 //Valor definido
  this.altura = altura
}

const esAlto = ({altura}) => altura > 1.8

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
Persona.prototype.soyAlto = function () {
  if (esAlto(this)) {
    console.log('Soy alto');
  }else {
    console.log('No soy alto');
  }
}

var sacha = new Persona('Sacha','Lifszyc',1.85)
var ericka = new Persona('Ericka','Luna',1.70)
var arturo = new Persona('Arturo', 'Martinez',1.81)
