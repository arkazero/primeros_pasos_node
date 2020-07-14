const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?json=1`
    });

    const resp = await instance.get();

    if (resp.data.longt === '') {
        throw new Error(`No hay resultados para ${encodeUrl}`)
    }

    const direccion_l = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    // instance.get()
    //     .then(function(response) {
    //         console.log(response.data);

    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });

    return {
        direccion_l,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}