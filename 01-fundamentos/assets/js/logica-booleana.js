

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log( !regresaFalse() );

console.warn('And');
console.log(true && true);
console.log(true && false);

console.log('=============');
regresaFalse() && regresaFalse();

console.warn('OR');
console.log( true || false);
console.log( false || false);

console.log( regresaTrue() || regresaFalse() );


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false; 

const a1 = true && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo";
const a5 = soyFalso || soyUndefined || regresaTrue() || "Ya no soy falso de nuevo";

console.log({a1, a2, a3, a4, a5});
