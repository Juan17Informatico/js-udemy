import _  from "underscore";
// Esta función crea un nuevo deck
export const crearDeck = (tiposDecarta, tiposEspeciales) => {

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDecarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
 
    return deck;
}