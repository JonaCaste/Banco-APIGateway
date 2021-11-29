const authResolver = {
    Mutation: {
        login: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.loginRequest(credentials);
        },

        // orquestacion
        signUp: async ( _, {signupData}, {dataSources}) => {

            //creando cuenta
            const accountData = {
                username: signupData.username,
                balance: signupData.balance,
                lastChange: (new Date().toISOString()),
            }

            await dataSources.accountAPI.createAccount(accountData);

            //creando usuario
            const userData = {
                username: signupData.username,
                password1: signupData.password1,
                password2: signupData.password2,
            }

            return await dataSources.authAPI.createUser(userData);
        }
    }
}




module.exports = authResolver;