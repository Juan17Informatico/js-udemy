(() => {
    "use strict";


    let deck = [];
    const tipos = ["C", "D", "H", "S"], 
        especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    //Referencias HTML
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        puntosHTML = document.querySelectorAll("small");

    const divCartasJugador = document.querySelector("#jugador-cartas"),
        divCartasComputadora = document.querySelector("#computadora-cartas"),
        btnNuevoJuego = document.querySelector("#btnNuevoJuego");

    //Función que inicia el juego
    const iniciarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        for(let i =0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        console.log(puntosJugadores)
    }
    //Esta función crea la baraja como nueva
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }
        }

        
        return _.shuffle(deck);
    };

    

    //Esta función me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }

        return deck.pop();
    };

    // Esta funcion retorna el valor de la carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
    };

    const acumularPuntos = () => {


    }

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta(carta);

            puntosHTML[1].innerText = puntosComputadora;

            const imgCarta = document.createElement("img");

            imgCarta.src = `./assets/cartas/${carta}.png`;
            imgCarta.classList.add("carta");
            divCartasComputadora.append(imgCarta);

            if (puntosMinimos > 21) {
                break;
            }
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("Empate");
            } else if (puntosMinimos > 21) {
                alert("Computadora gana");
            } else if (puntosComputadora > 21) {
                alert("Jugador Gana");
            } else {
                alert("Computadora gana");
            }
        }, 100);
    };

    //Eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta(carta);

        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement("img");

        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            alert("Lo siento mucho, perdiste");
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            alert("21, genial!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    });

    btnNuevoJuego.addEventListener("click", () => {

        iniciarJuego();

        // deck = crearDeck();
        btnPedir.disabled = false;
        btnDetener.disabled = false;

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerHTML = 0;
        puntosHTML[1].innerHTML = 0;
        divCartasComputadora.innerHTML = "";
        divCartasJugador.innerHTML = "";
    });
})();
