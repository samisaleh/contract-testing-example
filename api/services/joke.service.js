const { getDadJoke } = require('./icanhazdadjoke.service');
const { getChuckJoke } = require('./chuck.service');

const serviceMap = {
    'chuck': getChuckJoke,
    'dad': getDadJoke
}

function getJokes(id, type = 'dad') {
    return serviceMap[type](id)
}

module.exports = {
    getJokes
}
