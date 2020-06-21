const { chuckJokeDefaultRequest, chuckJokeDefaultResponse, chuckJokeRequest, chuckJokeResponse } = require("../../__fixtures__/chuck.service.fixtures");
const { pactWith } = require("jest-pact")
const { getChuckJoke, instance } = require("../../services/chuck.service")

pactWith({ consumer: "ChuckConsumer", provider: "ChuckProvider" }, provider => {
    describe('getChuckJoke', () => {
        beforeAll(async () => {
                instance.defaults.baseURL = provider.mockService.baseUrl;
            }
        );

        it('loads the default joke when no id is specified', async () => {
            await provider.addInteraction({
                state: "I have the default chuck joke",
                ...chuckJokeDefaultRequest,
                willRespondWith: chuckJokeDefaultResponse
            })

            const result = await getChuckJoke();
            expect(result).toStrictEqual({
                "id": "KhFIrWOlQUq0uLk8KlTS8Q",
                "joke": "The rotation of the Earth was actually started by a Chuck Norris roundhouse kick.",
                "source": "https://api.chucknorris.io",
                "totalChars": 81
            })
        })

        it('loads a joke by id', async () => {
            await provider.addInteraction({
                state: "I have the specified chuck joke",
                ...chuckJokeRequest,
                willRespondWith: chuckJokeResponse
            })

            const result = await getChuckJoke('JbC02pTdSmiLbji6nFq6wA');
            expect(result).toStrictEqual({
                "id": "JbC02pTdSmiLbji6nFq6wA",
                "joke": "When the Terminator goes to the cinema, he watches only Chuck Norris movies.",
                "source": "https://api.chucknorris.io",
                "totalChars": 76
            })
        })
    })
})
