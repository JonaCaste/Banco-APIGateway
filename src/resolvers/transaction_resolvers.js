const transactionResolver = {
    Query:{
        //con el if creamos un contexto -> validamos el token usernameToken, que viene de authentications
        transactionByUsername: async (_, {username}, {dataSources, usernameToken}) => {
            if(username == usernameToken){
                return await dataSources.accountAPI.transactionByUsername(username);
            }
            else{
                return null
            }
        }
    },

    Mutation:{
        createTransaction: async ( _, {transaction}, {dataSources}) => {
            return await dataSources.accountApi.createTransaction(transaction);
        }
    }
}

module.exports = transactionResolver;