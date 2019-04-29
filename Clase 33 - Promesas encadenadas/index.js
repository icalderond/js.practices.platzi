/*
En esta clase veremos las promesas, que son valores que aun no conocemos.
Las promesas tienen tre estados:

pending
fullfilled
rejected
*/

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

obtenerPersonaje(1)
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
  return obtenerPersonaje(2)
})
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
  return obtenerPersonaje(3)
})
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
  return obtenerPersonaje(4)
})
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
  return obtenerPersonaje(5)
})
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
  return obtenerPersonaje(6)
})
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
  return obtenerPersonaje(7)
})
.then(personaje => {
  console.log(`Hola yo soy ${personaje.name}`)
})
.catch(onError)
