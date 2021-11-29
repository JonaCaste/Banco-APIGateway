const accountResolvers = {
    Query:{
        accountByUsername: async ( _, {username}, {dataSources, usernameToken}) => {
            // _ -> viene de apolo, config por defecto, {objetos} -> asi los recibe apolo

            if(username == usernameToken){
                return await dataSources.accountAPI.accountByUsernameRequest(username);
            }
            else return null;
        },

        myAccount: async (_, {}, {dataSources, usernameToken}) => {
            if(usernameToken == null){
                return null;
            }else{
                return await dataSources.accountAPI.accountByUsernameRequest(usernameToken);
            }
        }
        
    }
}

module.exports = accountResolvers;