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

ImprimirMayusculasWithObject(israel)
ImprimirMayusculasWithObject(dario)

function ImprimirNombreYEdad({nombre,edad}) {
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

ImprimirNombreYEdad(israel)
ImprimirNombreYEdad(dario)
