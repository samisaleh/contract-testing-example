const { Verifier } = require('@pact-foundation/pact');
const fg = require('fast-glob');

const externalApis = [
    { baseUrl: 'https://api.chucknorris.io', tests: fg.sync(['../api/pact/pacts/chuck*'], { absolute: true }) },
    { baseUrl: 'https://icanhazdadjoke.com', tests: fg.sync(['../api/pact/pacts/dadjoke*'], { absolute: true }) },
]

externalApis.forEach( ({baseUrl, tests}) => {
    let opts = {
        providerBaseUrl: baseUrl,
        pactUrls: tests
    };

    return new Verifier(opts).verifyProvider().then(function () {
        console.log(`successfully verified pacts for ${baseUrl}`)
    });
});
