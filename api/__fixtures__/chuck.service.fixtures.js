const { Matchers } = require( '@pact-foundation/pact');

exports.chuckJokeDefaultRequest = {
    uponReceiving: 'a request for a chuck joke KhFIrWOlQUq0uLk8KlTS8Q',
    withRequest: {
        method: 'GET',
        path: '/jokes/KhFIrWOlQUq0uLk8KlTS8Q',
        headers: {
            accept: "application/json",
        },
    },
};

exports.chuckJokeDefaultResponse = {
    "status": 200,
    "headers": {},
    "body": {
        "categories": [],
        "created_at": "2020-01-05 13:42:21.179347",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "KhFIrWOlQUq0uLk8KlTS8Q",
        "updated_at": "2020-01-05 13:42:21.179347",
        "url": "https://api.chucknorris.io/jokes/KhFIrWOlQUq0uLk8KlTS8Q",
        "value": "The rotation of the Earth was actually started by a Chuck Norris roundhouse kick."
    }
}

exports.chuckJokeRequest = {
    uponReceiving: 'a request for a chuck joke JbC02pTdSmiLbji6nFq6wA',
    withRequest: {
        method: 'GET',
        path: '/jokes/JbC02pTdSmiLbji6nFq6wA',
        headers: {
            accept: "application/json",
        },
    },
};

exports.chuckJokeResponse = {
    "status": 200,
    "headers": {},
    "body": {
        "categories": [],
        "created_at": "2020-01-05 13:42:21.179347",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "JbC02pTdSmiLbji6nFq6wA",
        "updated_at": "2020-01-05 13:42:21.179347",
        "url": "https://api.chucknorris.io/jokes/JbC02pTdSmiLbji6nFq6wA",
        "value": "When the Terminator goes to the cinema, he watches only Chuck Norris movies."
    }
}
