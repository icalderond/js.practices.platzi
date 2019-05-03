function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre}, ${finalDeFrase}`)
  }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wei')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('sacha')
saludoMexicano('sacha')
saludoColombiano('sacha')
