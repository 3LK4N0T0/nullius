const sectionSeleccionarHabilidad = document.getElementById("seleccionar-habilidad")
const sectionReiniciar = document.getElementById("reiniciar")
const botonPersonajeJugador = document.getElementById("boton-personaje")
const botonOfensiva = document.getElementById("boton-ofensiva")
const botonDefensiva = document.getElementById("boton-defensiva")
const botonFurtiva = document.getElementById("boton-furtiva")
const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
const inputGladius = document.getElementById('gladius')
const inputScutum = document.getElementById('scutum')
const inputCarius = document.getElementById('carius')
const spanPersonajeJugador = document.getElementById("personaje-jugador")
const botonReiniciar = document.getElementById("boton-reiniciar")
const spanPersonajeEnemigo = document.getElementById("personaje-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensaje = document.getElementById("Mensajes")
const parrafo = document.createElement("p")

sectionReiniciar.style.display = 'none'

let ataqueJugador 
let ataqueEnemigo 
let vidasEnemigo = 3
let vidasJugador = 3
let resultado

class Personaje {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let gladius = new Personaje('Gladius',"./assets/Gladius.png",3)
let scutum = new Personaje('Scutum', './assets/Scutum.png', 3)
let carius = new Personaje('Carius', './assets/Carius.png', 3)

console.log(gladius)


function iniciarJuego() {
        
        sectionSeleccionarHabilidad.style.display = 'none'
        
        sectionReiniciar.style.display = 'none'

        
        botonPersonajeJugador.addEventListener('click' , seleccionarPersonajeJugador)
        
        
        botonOfensiva.addEventListener('click', posOfensiva)
        
        botonDefensiva.addEventListener('click', posDefensiva)
        
        botonFurtiva.addEventListener('click', posFurtiva)

        
        botonReiniciar.addEventListener("click", reiniciarJuego)

}

function aparecerSeleccionarHabilidad() {
        
        sectionSeleccionarHabilidad.style.display = 'flex'

        
        sectionSeleccionarPersonaje.style.display = 'none'
}

function seleccionarPersonajeJugador () {
        
        
        
        
        
        

        if(inputGladius.checked) {
        
        spanPersonajeJugador.innerHTML ="Gladius"
        aparecerSeleccionarHabilidad()
        } else if (inputScutum.checked) {
        
        spanPersonajeJugador.innerHTML ="Scutum"
        aparecerSeleccionarHabilidad()
        } else if (inputCarius.checked) {
        
        spanPersonajeJugador.innerHTML ="Carius"
        aparecerSeleccionarHabilidad()
        } else {
        alert("Debes Seleccionar un personaje")
        }
        seleccionarPersonajeEnemigo()
        
        
}

function seleccionarPersonajeEnemigo () {
        let personajeAleatorio = aleatorio(1,3)
        
        if (personajeAleatorio ==1) {
                spanPersonajeEnemigo.innerHTML = "Gladius"
        } else if (personajeAleatorio == 2) {
                spanPersonajeEnemigo.innerHTML = "Scutum"
        } else {
                spanPersonajeEnemigo.innerHTML = "Carius"
        }


}

function posOfensiva() {
        ataqueJugador = "OFENSIVA"
        ataqueEnemigoAleatorio()
        crearMensaje()
}

function posDefensiva() {
        ataqueJugador = "DEFENSIVA"
        ataqueEnemigoAleatorio()
        crearMensaje()
}

function posFurtiva() {
        ataqueJugador = "FURTIVA"
        ataqueEnemigoAleatorio()
        crearMensaje()
}

function combate() {
        
        

        if (ataqueJugador == ataqueEnemigo) {
          resultado = "EMPATE"
        } else if (ataqueJugador == "OFENSIVA" && ataqueEnemigo == "FURTIVA" || ataqueJugador == "DEFENSIVA" && ataqueEnemigo == "OFENSIVA" || ataqueJugador == "FURTIVA" && ataqueEnemigo == "DEFENSIVA") {
          resultado = "GANASTE"
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {resultado = "PERDISTE"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        }
        
}

function revisarVidas() {
        if (vidasEnemigo == 0) {
                crearMensajeFinal("Has usado tu fuerza para ganar este combate a muerte, el emperador Nullius esta feliz contigo")
        } else if (vidasJugador == 0) {
                crearMensajeFinal("A pesar de tus esfuerzos moriste es combate, Nullius solo se fue decepcionado")
        }
}

function crearMensaje() {
        

        let parrafo = document.createElement("p")
        parrafo.innerHTML = "Te personaje tiene pos " + ataqueJugador + " y el oponente la pos " + ataqueEnemigo + "- "  + resultado

        sectionMensaje.appendChild(parrafo)
        revisarVidas()
}

function crearMensajeFinal(resultadoFinal) {
        

        parrafo.innerHTML = resultadoFinal

        sectionMensaje.appendChild(parrafo)
        
        
        sectionReiniciar.style.display = 'flex'

        desabilitarBoton()


}

function desabilitarBoton() {
        
        botonOfensiva.disabled = true
        
        botonDefensiva.disabled = true
        
        botonFurtiva.disabled = true
}

function aleatorio(min,max){
        return Math.floor(Math.random()*(max-min+1)+min)
}


function ataqueEnemigoAleatorio() {
        let ataqueAleatorio = aleatorio(1,3)

        if (ataqueAleatorio == 1) {
                ataqueEnemigo = "OFENSIVA"
        } else if (ataqueAleatorio == 2) {
                ataqueEnemigo = "DEFENSIVA"
        } else if (ataqueAleatorio == 3) {
                ataqueEnemigo = "FURTIVA"
        }
        combate()
}

function reiniciarJuego() {
        location.reload()
}

window.addEventListener("load",iniciarJuego)

