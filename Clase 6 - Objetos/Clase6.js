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
  console.log(persona.nombre.toUpperCase());
}

function ImprimirMayusculasWithOnlyNombre({nombre}) {
  console.log(nombre.toUpperCase());
}
// ImprimirMayusculasWithObject(israel)
// ImprimirMayusculasWithObject(dario)

ImprimirMayusculasWithOnlyNombre(israel)
ImprimirMayusculasWithOnlyNombre(dario)
ImprimirMayusculasWithOnlyNombre({nombre:'pepito'})
