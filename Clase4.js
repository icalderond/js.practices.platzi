var nombre = 'Israel', edad = 31

//Sin parametros
function ImprimirEdad() {
  console.log(`${nombre} tiene ${edad} años`);
}
ImprimirEdad()

function ImprimirNombreYEdad(n,e) {
  console.log(`${n} tiene ${e} años`);
}
ImprimirNombreYEdad('Erick',31)
ImprimirNombreYEdad('Jorge',12)
ImprimirNombreYEdad('Ana',12)
ImprimirNombreYEdad('Karla',13)

//Para JS es indistinto si se pasan al reves las variables
ImprimirNombreYEdad(13,'Karla')
