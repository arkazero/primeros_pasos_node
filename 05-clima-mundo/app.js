const lugar = require('./lugar/lugar')
const temperatura = require('./clima/clima');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//         temperatura.getClima(result.lat, result.lng)
//             .then((res_clima) => {
//                 console.log(res_clima);
//             })
//     }).catch((err) => {

//     });


const getInfo = async(direccion) => {
    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng)

        return `El clima de ${coords.direccion_l} es ${temp.temperatura}`;
    } catch (error) {
        return `No se pudo obtener el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);