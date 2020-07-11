let empleados = [{
    id: 1,
    nombre: 'Juan'
}, {
    id: 2,
    nombre: 'Felipe'
}, {
    id: 3,
    nombre: 'Nubia'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {
    let empleadoBD = empleados.find(empleado => empleado.id === id)

    if (!empleadoBD) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoBD)
    }
}

// getEmpleado(1, (error, empleado) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log(empleado.nombre);
// });

let getSalario = (empleado, callback) => {

    console.log(`El id sobre el que vamos a obtener el salario es ${empleado.id}`)

    let salarioBD = salarios.find(salario => salario.id === empleado.id)

    if (!salarioBD) {
        callback(`No existe un salario con el ID ${empleado.id}`)
    } else {
        getEmpleado(empleado.id, (error, resultado) => {
            if (error) {
                return console.log(error);
            }

            callback(null, {
                nombre: resultado.nombre,
                salario: salarioBD.salario
            })
        });

    }
}

let empleado = {
    id: 1
}

getSalario(empleado, (error, salario) => {
    if (error) {
        return console.log(error);
    }
    console.log(`Este el salario: ${salario.salario} de ${salario.nombre}`);
});