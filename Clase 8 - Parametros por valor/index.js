var israel={
  //Key:Value
  nombre:'Israel',
  apellido:'Calderón',
  edad:28
}
var dario={
  //Key:Value
  nombre:'Dario',
  apellido:'Perez',
  edad:28
}

function ImprimirMayusculasWithObject(persona) {
  // var nombre = persona.nombre;
  var {nombre} = persona;
  console.log(nombre.toUpperCase());
}

// ImprimirMayusculasWithObject(israel)
// ImprimirMayusculasWithObject(dario)

function ImprimirNombreYEdad({nombre,edad}) {
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

// ImprimirNombreYEdad(israel)
// ImprimirNombreYEdad(dario)

//los objetos se que se pasan como parametro se pasan por referencia
function cumpleanos(persona) {
  persona.edad+=1
}

function cumpleanos_edad(edad) {
  edad+=1
}

function cumpleanos_newObject(persona) {
  return{
    //
    ...persona,
    edad:persona.edad+1
  }
}
israel=cumpleanos_newObject(israel)
