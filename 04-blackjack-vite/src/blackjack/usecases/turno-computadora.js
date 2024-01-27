import { valorCarta, crearCartaHTML } from "./";
import {pedirCarta} from "./pedir-carta";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para 
 * @param {HTMLElement>} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement>} divCartasComputadora elemento HTML para mostrar los puntos 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos es necesario');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;


    do {
        const carta = pedirCarta(deck);
        console.log('Computadora' , carta);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        //Crear carta
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 10);
}