function formatJoke(joke = '', source) {
    // add some nonsense data for testing later
    return {
        joke,
        source,
        totalChars: joke.length
    }
}

module.exports = {
    formatJoke
}
