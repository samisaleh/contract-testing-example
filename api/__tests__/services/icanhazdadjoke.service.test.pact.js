const { dadJokeDefaultRequest, dadJokeDefaultResponse, dadJokeRequest, dadJokeResponse } = require("../../__fixtures__/icanhazdadjoke.service.fixtures");
const { pactWith } = require("jest-pact")
const { getDadJoke, instance } = require("../../services/icanhazdadjoke.service")

pactWith({ consumer: "DadJokeConsumer", provider: "DadJokeProvider" }, provider => {
    describe('getDadJoke', () => {
        beforeAll(async () => {
                instance.defaults.baseURL = provider.mockService.baseUrl;
            }
        );

        it('loads the default joke when no id is specified', async () => {
            await provider.addInteraction({
                state: "I have the default dad joke",
                ...dadJokeDefaultRequest,
                willRespondWith: dadJokeDefaultResponse
            })

            const result = await getDadJoke();
            expect(result).toStrictEqual({
                "id": "usrcaMuszd",
                "joke": "What's the worst thing about ancient history class? The teachers tend to Babylon.",
                "source": "https://icanhazdadjoke.com",
                "totalChars": 81
            })
        })

        it('loads a joke by id', async () => {
            await provider.addInteraction({
                state: "I have the specified chuck joke",
                ...dadJokeRequest,
                willRespondWith: dadJokeResponse
            })

            const result = await getDadJoke('hyPmOZLBIBd');
            expect(result).toStrictEqual({
                "id": "hyPmOZLBIBd",
                "joke": "I used to work for a soft drink can crusher. It was soda pressing.",
                "source": "https://icanhazdadjoke.com",
                "totalChars": 66
            })
        })
    })
})
