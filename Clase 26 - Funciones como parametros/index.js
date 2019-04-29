class Persona {
  constructor(nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn){
    // var nombre = this.nombre
    // var apellido = this.apellido
    var {nombre, apellido} = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if(fn){ //undefinded, null, 0, (values false)
      fn(nombre, apellido,false)
    }
  }

  soyAlto(){
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre,apellido,altura) {
    super(nombre,apellido,altura)
  }

  saludar(fn){
    // var nombre = this.nombre
    // var apellido = this.apellido
    var {nombre, apellido} = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
    if(fn){ //undefinded, null, 0, (values false)
      fn(nombre, apellido,true)
    }
  }
}

const responderSaludo =  (nombre,apellido, esDev) => {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`No sabia que eras desarrollador/a`);
  }
}
var sacha = new Persona('Sacha','Lifszyc',1.72)
var ericka = new Persona('Ericka','Luna',1.65)
var arturo = new Desarrollador('Arturo', 'Martinez',1.89)

sacha.saludar()
ericka.saludar(responderSaludo)
arturo.saludar(responderSaludo)
