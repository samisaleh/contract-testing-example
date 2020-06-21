const { getDadJoke } = require('./icanhazdadjoke.service');
const { getChuckJoke } = require('./chuck.service');

const serviceMap = {
    'chuck': getChuckJoke,
    'dad': getDadJoke
}

function getJokes(id, type ) {
    const jokeService = serviceMap[type] || serviceMap.dad;
    return jokeService(id)
}

module.exports = {
    getJokes
}
