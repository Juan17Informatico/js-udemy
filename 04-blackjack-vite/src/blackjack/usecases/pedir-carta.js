/**
 * 
 * @param {Array<string>} deck Un array de cartas
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(carta);
    return carta;
}