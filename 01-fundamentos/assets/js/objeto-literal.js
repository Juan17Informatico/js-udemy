const personaje = {
    //Pares de valores:
    //Llave | Valor
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        unicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War',
};

console.log(personaje);
console.log( 'Nombre: ', personaje.nombre );
console.log( 'Nombre: ', personaje['nombre'] );

console.log( 'Edad: ', personaje.edad );

console.log( 'Coors: ', personaje.coords);
console.log( 'Coors: ', personaje.coords.lat );

console.log( 'No. Trajes', personaje.trajes.length);

console.log( 'Último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

console.log('Última película: ', personaje["ultima pelicula"]);

//MAS DETALLES

delete personaje.edad;

console.log(personaje);

personaje.casado = true;

//Convertir objeto en un array de arrays
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

console.log(personaje);

//Congelar la edición de las propiedades del objeto 
Object.freeze( personaje );
personaje.dinero = 100000000000000000;

//Se obtiene las propiedades de los nombres y también sus valores 
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values(personaje);
console.log({propiedades, valores});