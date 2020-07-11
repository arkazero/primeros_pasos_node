function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Juan Andersson Garcia')
console.log(saludo);