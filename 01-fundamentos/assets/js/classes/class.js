
class Persona {
    
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log('Hola a todos ');
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = "Sin codigo", frase = "Sin frase"){    

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase; 

        Persona._conteo++;
    }

    //Set es para establecer un valor 
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    //Get sería para recuperar un valor 
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}   

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hola');
const ironman = new Persona('Tony Stark', 'Ironman', 'Soy millonario');

spiderman.miFrase();

spiderman.setComidaFavorita = 'Pie de cereza de la tía May';
// spiderman.nemesis = 'Duende Verde';


// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo);
console.log( Persona.conteo);
Persona.mensaje();

// Persona.propiedadExterna = 'Hola mundo';
// console.log(Persona.propiedadExterna);
// console.log(Persona);