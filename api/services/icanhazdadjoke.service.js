const axios = require('axios')
const {formatJoke} = require('../helpers')

const baseURL = 'https://icanhazdadjoke.com'

const instance = axios.create({
    baseURL,
    headers: {
        accept: 'application/json'
    }
});

async function getDadJoke(id = 'usrcaMuszd') {
    const { data } = await instance.get('/j/' + id);
    return formatJoke(data.id, data.joke, baseURL)
}

module.exports = {
    instance,
    getDadJoke
}
