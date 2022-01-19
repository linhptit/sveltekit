## Tech

- [Hasura] - graphql
- [postgres] - Database
- [nextjs | sveltekit] - Client Platform

## Release
- release/v0.1.0: approach with Remote Schemas
- release/v0.2.0: approach with Actions


## Installation
Setup on local
```sh
git clone git@github.com:linhptit/sveltekit.git
cd sveltekit
docker-compose up -d
```

wait ~3m => access `http://localhost:3000/{tail}`

### In-progress & Improve
- facing issue when trying setup graphql return object (for now it return String) => need to investigate more
- setup environment for docker
- should set up the client need wait Hasura sever ready
