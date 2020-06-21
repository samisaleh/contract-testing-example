const { Matchers } = require( '@pact-foundation/pact');

exports.dadJokeDefaultRequest = {
    uponReceiving: 'a request for a dad joke usrcaMuszd',
    withRequest: {
        method: 'GET',
        path: '/j/usrcaMuszd',
        headers: {
            accept: "application/json",
        },
    },
};

exports.dadJokeDefaultResponse = {
    "status": 200,
    "headers": {},
    "body": {
        "id": "usrcaMuszd",
        "joke": "What's the worst thing about ancient history class? The teachers tend to Babylon.",
        "status": 200
    }
}

exports.dadJokeRequest = {
    uponReceiving: 'a request for a dad joke hyPmOZLBIBd',
    withRequest: {
        method: 'GET',
        path: '/j/hyPmOZLBIBd',
        headers: {
            accept: "application/json",
        },
    },
};

exports.dadJokeResponse = {
    "status": 200,
    "headers": {},
    "body": {
        "id": "hyPmOZLBIBd",
        "joke": "I used to work for a soft drink can crusher. It was soda pressing.",
        "status": 200
    }
}
