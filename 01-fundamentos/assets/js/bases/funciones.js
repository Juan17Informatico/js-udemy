//Función normal
function saludar(nombre) {
    console.log(arguments);
    console.log("Hola " + nombre);
    return 1;
}

// saludar("Juan");

const retornoDeSaludar = saludar('Juan', 1, true, 'Costa Rica');

console.log(retornoDeSaludar);

/** Función anonima */
const saludar2 = function (nombre) {
    console.log("Hola " + nombre);
};

// saludar2("Mundos");

//funciones de flecha

const saludarFlecha = (nombre) => {
    console.log("Hola " + nombre);
};

// saludarFlecha("Meliodas");


// function sumar( a , b ){
//     return a + b;
//}

// console.log( sumar(1,2) );

// const sumar2 = (a,b) => a + b; 

// console.log( sumar2(1,2) );

// function getAleatorio(){
//     return Math.random();
// }

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );
