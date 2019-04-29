const API_URL = 'https://swapi.co/api/'
const PEOLPE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url =  `${API_URL}${PEOLPE_URL.replace(':id',id)}`

  $.get(url,opts,function(person){
    console.log(`Hola yo soy ${person.name}`);
    if(callback){
      callback()
    }
  })
}

//Se obtuiene en serie, no en paralelo
obtenerPersonaje(1,function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {

          })
        })
      })
    })
  })
})
