function formatJoke(id, joke = '', source) {
    // add some nonsense data for testing later
    return {
        id,
        joke,
        source,
        totalChars: joke.length
    }
}

module.exports = {
    formatJoke
}
