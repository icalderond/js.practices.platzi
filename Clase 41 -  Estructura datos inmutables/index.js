/*
Ayudan a prevenir el efecto colateral

La ventaja de la estructuras inmutables es no contaminar
afectar otras funciones, otras partes del codigo al mutar, al cambiar los datos
de un objeto o una varibale
*/
const israel = {
  nombre: 'Israel',
  apellido: 'Calderon',
  edad: 31
}

const cumpleanos = persona => persona.edad++
const cumpleanosInmutable = persona => (
  {
    ...persona,
    edad: persona.edad + 1
  }
)
