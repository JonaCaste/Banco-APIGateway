const {gql} = require("apollo-server");

const transactionTypeDefs = gql`
    type Transaction{
        id: String!
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int
        date: String
    }

    #objetos de entrada
    input TransactionInput{
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int
    }

    #extends extiende de Account, le añadimos mas Querys a nuestro query original ya que si no, nuestro
        #api se vuelve loco con dos querys 
    extend type Query{
        transactionByUsername(username: String!): [Transaction] #en java es un arrayList
    }

    extend type Mutation{
        createTransaction(transaction: TransactionInput!): Transaction
    }
`

module.exports = transactionTypeDefs;