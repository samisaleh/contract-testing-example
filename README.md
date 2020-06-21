Work in progress!

Example project demonstrating contract testing between a React frontend, Express JS API and 3rd party API's using Pact.

Helpful links:
- [Pact](https://docs.pact.io/)
- [Pact stub server](https://hub.docker.com/r/pactfoundation/pact-stub-server)

#### Notes:
- Consumer tests contain have the extension `.test.pact.js`
- Pact files will be output to the `/pact/pacts` directory of each project
- Before testing pact files against the local API the stub server will need to be started to mock the external API's
