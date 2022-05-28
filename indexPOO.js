class Coche {
    constructor(marca, modelo, puertas){
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.abierto = false;
    }
    abrirCoche(coche) {
        this.abierto = true;
        console.log(`El coche ${this.marca} ${this.modelo} se ha abierto`);
    }
}

const coche1 = new Coche ("Seat", "Panda",2);

console.log(coche1.abrirCoche())
console.log(coche1)