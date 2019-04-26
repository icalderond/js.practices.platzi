var edad=27
// edad = edad+1
edad+=1

var peso = 75
// peso=peso-2
peso-=2

var sandwich = 2
peso+=sandwich

var jugarFutbol=3
peso-=jugarFutbol

var precioDelVino=200.3

//La manera de almacenar decimales no es preciso
var total=precioDelVino*3
var total2=precioDelVino * 100 * 3 / 100
var total3= Math.round(precioDelVino * 100 * 3)/100
//Total de decimales que queremos en el numero decimal
var totalStr=total.toFixed(2)
var totalParseFloat = parseFloat(totalStr)


var pizza=8
var personas = 2
var cantidadPorcionesPorPersona = pizza / personas
