
/**
 * 
 * @param {String} carta Ejemplo: "A1" || "AS"
 * @returns Retorna el valor de la carta en formato númerico
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}