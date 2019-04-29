const API_URL = 'https://swapi.co/api/'
const PEOLPE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = function(person){
  console.log(`Hola yo soy ${person.name}`);
}

function obtenerPersonaje(id) {
  const url =  `${API_URL}${PEOLPE_URL.replace(':id',id)}`
  $.get(url,opts,onPeopleResponse)
}

// //asincronismo no se sabe en que orden va a llegar la respuesta
//El orden en el que se pide no es el mismo en el que llega
// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
