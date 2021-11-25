const serverCofig = require("../server");
//super clase para conectarnos a servicios rest
const {RESTDataSource} = require("apollo-datasource-rest");

class AccountApi extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverCofig.account_api_url;
    }

    async accountByUsernameRequest(username){

        //interpalacion de strings
        //get() viene de la super clase RESTDataSource
        return await this.get(`/accounts/${username}`);
    }

}

module.exports = AccountApi;