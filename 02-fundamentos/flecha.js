function sumar(a, b) {
    return a + b;
}

let sumarFlecha = (a, b) => a + b;

let saludar = (nombre) => `Hola ${ nombre }`;

console.log(sumar(10, 20));

console.log(sumarFlecha(8, 8));

console.log(saludar('Juan Garcia'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());