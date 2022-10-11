let sectionSeleccionarHabilidad = document.getElementById("seleccionar-habilidad")
let sectionReiniciar = document.getElementById("reiniciar")
let botonPersonajeJugador = document.getElementById("boton-personaje")
let botonOfensiva = document.getElementById("boton-ofensiva")
let botonDefensiva = document.getElementById("boton-defensiva")
let botonFurtiva = document.getElementById("boton-furtiva")
let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
let inputGladius = document.getElementById('gladius')
let inputScutum = document.getElementById('scutum')
let inputCarius = document.getElementById('carius')
let spanPersonajeJugador = document.getElementById("personaje-jugador")
let botonReiniciar = document.getElementById("boton-reiniciar")
let spanPersonajeEnemigo = document.getElementById("personaje-enemigo")
let spanVidasJugador = document.getElementById("vidas-jugador")
let spanVidasEnemigo = document.getElementById("vidas-enemigo")
let sectionMensaje = document.getElementById("Mensajes")
let parrafo = document.createElement("p")

sectionReiniciar.style.display = 'none'

let ataqueJugador 
let ataqueEnemigo 
let vidasEnemigo = 3
let vidasJugador = 3
let resultado

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

