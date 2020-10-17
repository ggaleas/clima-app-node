const axios = require('axios');
const { builtinModules } = require('module');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}Ottawa?json=1`,
        headers: { 'json': '1' }
    });

    const resp = await instance.get()

    if (resp.data.length === 0) {
        throw new error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.alt.loc.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}