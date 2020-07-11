// let getNombre = async() => {
//     return 'Juan';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Juan');
        }, 3000)
    });
}

let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

getNombre().then(nombre => {
    console.log(nombre);
})