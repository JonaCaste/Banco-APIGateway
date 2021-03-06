const {RESTDataSource} = require("apollo-datasource-rest");
const serverConfig = require("../server")

class AuthAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async createUser(userData){
        return await this.post("/rest-auth/registration/", userData)
    }

    async loginRequest(credentials){

        //peticion a nuestro back

        return await this.post("/rest-auth/login/", credentials)
    }

}

module.exports = AuthAPI;