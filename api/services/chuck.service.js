const axios = require('axios')
const {formatJoke} = require('../helpers')

const baseURL = 'https://api.chucknorris.io'

const instance = axios.create({
    baseURL,
    headers: {
        accept: 'application/json'
    }
});

async function getChuckJoke(id = 'KhFIrWOlQUq0uLk8KlTS8Q') {
    const { data } = await instance.get('/jokes/' + id);
    return formatJoke(id, data.value, baseURL)
}

module.exports = {
    instance,
    getChuckJoke
}
