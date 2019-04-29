const API_URL = 'https://swapi.co/api/'
const PEOLPE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url =  `${API_URL}${PEOLPE_URL.replace(':id',id)}`

  $
  .get(url,opts,callback)
  .fail(() => {
    console.log(`No se pudo obtener el personaje ${id}`)
  })
}

//Se obtuiene en serie, no en paralelo
obtenerPersonaje(1,function (personaje) {
  console.log(`Hola yo soy ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola yo soy ${personaje.name}`)

      obtenerPersonaje(17, function (personaje) {
        console.log(`Hola yo soy ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola yo soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola yo soy ${personaje.name}`)

            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola yo soy ${personaje.name}`)

            })
          })
        })
      })
    })
  })
})
