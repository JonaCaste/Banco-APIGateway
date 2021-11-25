const { ApolloServer } = require("apollo-server");

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
const AccountAPI = require('./dataSources/account_api')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountAPI: new AccountAPI()
    }),

    //config para iniciar el server
    introspection: true,
    playground: true
})


server.listen(process.env.PORT || 4000).then(({url})=>{
    console.log(`🚀 Server ready at ${url}`);
})