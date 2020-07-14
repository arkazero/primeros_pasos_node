const axios = require('axios');

const getClima = async(latitud, longitud) => {
    //const encodeUrl = encodeURI(direccion);
    const apikey = '93b80bfca6f2b79225bdbd9a998d2976';

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric`
    });
    const resp = await instance.get();

    if (resp === '') {
        throw new Error(`No hay resultados para ${latitud}`)
    }

    const temperatura = resp.data.main.temp;

    // instance.get()
    //     .then(function(response) {
    //         console.log(response.data);

    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });

    return {
        temperatura
    }
}

module.exports = {
    getClima
}