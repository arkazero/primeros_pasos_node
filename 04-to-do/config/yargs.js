const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marco como completado o pendiente la tarea'
    }
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completo de una tarea', opts1)
    .command('borrar', 'Eliminar una tarea por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}