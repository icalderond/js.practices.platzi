const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego{
  
  constructor(){
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

  inicializar(){
    //Se puede poner el bind una vez para siempre 
    //o se puede usar en cada llamado de la funcion
    this.elegirColor = this.elegirColor.bind(this)

    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores ={
      celeste,
      violeta,
      naranja,
      verde
    }
  }

  generarSecuencia(){
    this.secuencia = new Array(10).fill(0).map(n => Math.floor( Math.random() * 4 ) )
  }
  
  siguienteNivel(){
    this.iluminarSecuencia() 
    this.AgregarEventosClick()
  }

  transformarNumeroAColor(numero){
    switch (numero) {
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }
  }

  iluminarSecuencia(){
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color),1000 * i)
    }
  }

  iluminarColor(color){
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color),350)
  }

  apagarColor(color){
    this.colores[color].classList.remove('light')
  }

  AgregarEventosClick(){
    this.colores.celeste.addEventListener('click',this.elegirColor)
    this.colores.verde.addEventListener('click',this.elegirColor)
    this.colores.violeta.addEventListener('click',this.elegirColor)
    this.colores.naranja.addEventListener('click',this.elegirColor)
  }

  elegirColor(ev){
    // console.log(ev);
    console.log(this);
    //this dentro del evento es el boton
    //Se incluye ala palabra bind(this) cuando se llama la funcion
  }

}

function empezarJuego() {
  window.juego=new Juego()
}