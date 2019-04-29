const API_URL = 'https://swapi.co/api/'
const PEOLPE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url =  `${API_URL}${PEOLPE_URL.replace(':id',id)}`
    $
    .get(url,opts,function (data) {
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`No se pudo obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18]
  var promesas = ids.map(id => obtenerPersonaje(id))

  try {
    var personajes =await Promise.all(promesas)
    console.table(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()

// obtenerPersonaje(1)
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
//   return obtenerPersonaje(2)
// })
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
//   return obtenerPersonaje(3)
// })
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
//   return obtenerPersonaje(4)
// })
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
//   return obtenerPersonaje(5)
// })
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
//   return obtenerPersonaje(6)
// })
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
//   return obtenerPersonaje(7)
// })
// .then(personaje => {
//   console.log(`Hola yo soy ${personaje.name}`)
// })
// .catch(onError)
