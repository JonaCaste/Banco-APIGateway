const accountResolvers = {
    Query:{
        accountByUsername: async ( _, {username}, {dataSources}) => {
            // _ -> viene de apolo, config por defecto, {objetos} -> asi los recibe apolo

            return await dataSources.accountAPI.accountByUsernameRequest(username);
        }
        
    }
}

module.exports = accountResolvers;