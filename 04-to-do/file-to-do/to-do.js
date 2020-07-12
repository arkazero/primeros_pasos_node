const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    leerBD();
    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar')
    });
}

const leerBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }

}

const getListado = () => {
    leerBD();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    console.log(`Los datos para actualizar son: ${descripcion} y ${completado}`);
    leerBD();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();

        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {
    leerBD();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}