const { gql } = require("apollo-server");

// aca escribimos codigo de graphQL
const accountTypeDefs = gql`
    type Account{
        username: String!
        balance: Int!
        lastChange: String
    }

    type Query{
        accountByUsername(username: String!): Account
        myAccount: Account
    }
`;

module.exports = accountTypeDefs;