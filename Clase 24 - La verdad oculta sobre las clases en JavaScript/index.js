//Esto se hacia antes
function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

//Prototipo Persona
function Persona(nombre,apellido,altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = 20 //Valor definido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
}

function Desarrollador(nombre,apellido){
  this.nombre = nombre
  this.apellido = apellido
}
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}


// var sacha = new Persona('Sacha','Lifszyc',1.72)
// var ericka = new Persona('Ericka','Luna',1.65)
// var arturo = new Persona('Arturo', 'Martinez',1.89)
