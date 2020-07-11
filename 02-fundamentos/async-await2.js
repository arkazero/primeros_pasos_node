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

let getEmpleado = async(id) => {
    let empleadoBD = empleados.find(empleado => empleado.id === id)

    if (!empleadoBD) {
        throw new Error(`No existe un empleado con el ID ${id}`)
    } else {
        return empleadoBD;
    }
}

let getSalario = async(empleado) => {

    console.log(empleado.id);
    let salarioBD = salarios.find(salario => salario.id === empleado.id)

    if (!salarioBD) {
        throw new Error(`No existe un salario para el empleado ${empleado.nombre}`)
    } else {

        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario
        };
    }

}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de: ${resp.salario}`
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));