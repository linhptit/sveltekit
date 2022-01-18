const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const axios = require('axios');


const typeDefs = gql`
  type LongTail {
     id: String
     tail: String
  }
  type Query {
    getLongTails1: String
  }
`;


const data = [
    {
        "id": 1,
        "title": "Svelte",
        "description": "A JavaScript Front End Framework"
    },
    {
        "id": 2,
        "title": "Postgres",
        "description": "An open-source SQL database"
    },
    {
        "id": 3,
        "title": "Hasura",
        "description": "An auto-generated GraphQL API"
    }
]

function getLongTails() {
  return axios.get(`http://host.docker.internal:8080/api/rest/long-tails`);
}


const resolvers = {
    Query: {
        getLongTails1: () => {
            return getLongTails().then((res) => {
                const customData = res.data.long_tails.map(longTail => {
                    const tail = data.find(i => i.id === longTail.json_id)
                    return {
                        ...longTail,
                        ...tail
                    }
                })
                return JSON.stringify(customData)
            })
        }
    }
};

const schema = new ApolloServer({ typeDefs, resolvers });

schema.listen({ port: 3000}).then(({ url }) => {
    console.log(`schema ready at ${url}`);
});
