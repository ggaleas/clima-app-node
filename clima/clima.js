const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6e95c684f505a324cad91ed707cda79a&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}