let empleados = [{
    id: 1,
    nombre: 'Juan'
}, {
    id: 2,
    nombre: 'Felipe'
}, {
    id: 3,
    nombre: 'Andy'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(empleado => empleado.id === id)

        if (!empleadoBD) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoBD)
        }

    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        console.log(empleado.id);
        let salarioBD = salarios.find(salario => salario.id === empleado.id)

        if (!salarioBD) {
            reject(`No existe un salario para el empleado ${empleado.nombre}`)
        } else {

            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario
            })
        }
    });

}

// getEmpleado(3).then(empleado => {
//     getSalario(empleado).then(empleado => {
//         console.log(`Este es el salario ${empleado.salario}  del empleado ${empleado.nombre}`);
//     }, (error) => console.log(error))

// })

getEmpleado(1).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`Este es el salario ${resp.salario}  del empleado ${resp.nombre}`);
    })
    .catch(error => {
        console.log(error);
    })