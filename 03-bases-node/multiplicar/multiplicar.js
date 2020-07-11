const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor enviado no es un numero');
            return;
        }
        let dataTabla = '';

        for (let i = 1; i <= limite; i++) {
            dataTabla += `${base} * ${i} = ${ base * i} \n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, dataTabla, (err) => {
            if (err) reject(err)
            else
                resolve(`La tabla-${base}.txt`);
        });

    })


}

let listarTabla = (base, limite) => {
    console.log("================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i} \n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}