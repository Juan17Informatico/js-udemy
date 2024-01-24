const miModulo = (() => {
    "use strict";

    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    //Referencias HTML
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        puntosHTML = document.querySelectorAll("small");

    const divCartasJugadores = document.querySelectorAll(".divCartas"),
        btnNuevoJuego = document.querySelector("#btnNuevoJuego");

    //Función que inicia el juego
    const iniciarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach( elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        console.log(puntosJugadores);
    };
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

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    };

    //Crear carta
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    };

    //Set time out
    const determinarGanador = () =>{

        const [puntosMinimos, puntosComputadora] = puntosJugadores;
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
    }
    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
    
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        determinarGanador();
        
        console.log(puntosJugadores, puntosComputadora);
    };  

    //Eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        
        console.log(puntosJugadores);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevoJuego.addEventListener("click", () => {
        iniciarJuego();

    });

    return 'Hola mundo';
})();
