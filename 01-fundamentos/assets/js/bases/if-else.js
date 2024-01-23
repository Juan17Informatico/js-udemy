
let a = 5;

if( a > 10 ){
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 5');
}

//
const hoy = new Date();
let dia = hoy.getDay();

console.log( {dia} );

if( dia === 1 ){
    console.log('Lunes');
}else {
    console.log('No es Lunes');
} 

//Sin usar if Else, o Switch, únicamente objetos para realizar la misma tarea e imprimir el día de la semana

dia = 3; //0:domingo, 1:lunes

const diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
};

console.log(  diaSemana[dia] );

