# Challenge
Resolve challenge from https://gist.github.com/joanrodriguez/00b2c4ccb2534d5ce8e28560c72d8566
## Tech

- [Hasura] - graphql
- [postgres] - Database
- [nextjs | sveltekit] - Client Platform


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
