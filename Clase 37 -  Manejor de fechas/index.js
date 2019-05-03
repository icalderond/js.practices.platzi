function diasEntreFechas(fecha1,fecha2) {
  const milisegundosEnUnDia = 1000 * 60 * 60 * 24
  const diferencia =Math.abs( fecha1 - fecha2 )

  return Math.floor(diferencia / milisegundosEnUnDia)
}

const hoy = new Date()
const nacimien = new Date(1988,01,01)

diasEntreFechas(hoy,nacimien)
