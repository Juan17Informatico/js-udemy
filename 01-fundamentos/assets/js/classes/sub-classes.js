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

class Heroe extends Persona {
    
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker');
console.log(spiderman.quienSoy());

