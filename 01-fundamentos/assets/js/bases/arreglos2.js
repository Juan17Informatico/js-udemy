let juegos = ['Zelda', 'Mario', 'Metroid', 'God Of War'];
console.log('Largo:', juegos.length);

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length - 1 ];

// console.log({primero, ultimo});

juegos.forEach( (element, indice, arr)=>{
    // console.log({element, indice, arr});
} );

//Para insertar un elemento al final del array
let nuevaLongitud = juegos.push( 'Sonic' );

console.log( {nuevaLongitud, juegos } );

//Metodo para insertar un elemento al inicio del array 
nuevaLongitud = juegos.unshift('Assasins Creed');

console.log( {nuevaLongitud, juegos } );

//Metodo para borrar el último elemento de un array

let juegoBorrado = juegos.pop();
console.log( {juegoBorrado, juegos} );


//Para eliminar un elemento específico
let pos = 1;
console.log(juegos)
let juegosBorrados = juegos.splice( pos, 2);

console.log( {juegosBorrados, juegos} );

//En que posicion se encuentra un elemento 

let metroidIndex = juegos.indexOf('Metroid');

console.log({metroidIndex});
