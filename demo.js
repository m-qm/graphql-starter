// https://github.com/FrontendMasters/fullstack-graphql.git

const gql = require ('graphql-tag');
const {ApolloServer} = require ('apollo-server');

const typeDefs = gql`
  type User {
    email: String!
    avatar: String!
    friends: [User]!
  }
  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me () {
      return {
        email: 'yo@master.com',
        avatar: 'http://yoda.png',
        friends: [],
      };
    },
  },
};

const server = new ApolloServer ({
  typeDefs,
  resolvers,
});

server.listen (5000).then (url => console.log (`Listening on ${url.url}`));
