# Guardian service

## Description

Microservice for guardian registration

## Installation

```bash
$ npm install
```

## Docker

This service requires docker or a local mongodb installation. If using a local mongodb, see app.module.ts for connection options, and make sure there are matching options for the mongodb installation and the source code.

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

## Stay in touch

## License

Nest is [MIT licensed](LICENSE).
