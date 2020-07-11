let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Juan Garcia',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id ${id}, no existe en la BD`)
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(10, (error, usuario) => {
    if (error) {
        return console.log(error);
    }
    console.log('Usuario de base de datos', usuario);
})