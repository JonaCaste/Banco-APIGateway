const {gql} = require("apollo-server");

const auth_typeDefs = gql`
    # por que enviamos un objeto entero
    input LoginInput{
        username: String!
        password: String!
    }

    input SignupInput{
        username: String!
        password1: String!
        password2: String!
        balance: Int
    }

    #lo que nos devuelven
    type Token{
        key: String!
    }

    type Mutation{
        login(credentials: LoginInput!): Token!
        signUp(signupData: SignupInput!): Token!
    }
`

module.exports = auth_typeDefs;