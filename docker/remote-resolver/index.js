const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const axios = require('axios');
const { isEmpty } = require('lodash')
const data = require('./data.json')

const typeDefs = gql`
  type LongTail {
     id: Int
     title: String
     description: String
  }
  type Query {
    getLongTailByTailCus(tail: String): LongTail,
  }
`;


function getLongTails(tail) {
  return axios.get(`http://host.docker.internal:8080/api/rest/long-tail-by-tail/${tail}`);
}

const resolvers = {
    Query: {
        getLongTailByTailCus: (_, { tail }) => {
            console.log(tail)
            return getLongTails(tail).then((res) => {
                const customData = res.data.long_tails
                if (isEmpty(customData)) return undefined
                const longTail = customData[0]

                return {
                    ...longTail,
                    ...data.find(i => i.id === longTail.json_id)
                }
            })
        },
    }
};

const schema = new ApolloServer({ typeDefs, resolvers });

schema.listen({ port: 3001}).then(({ url }) => {
    console.log(`schema ready at ${url}`);
});
