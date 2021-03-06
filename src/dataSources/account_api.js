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

    async createAccount(accountData){
        return await this.post("/accounts/", accountData)
    }

    //Transaction
    async createTransaction(transaction){
        return await this.post("/transaction/", transaction);
    }

    async transactionByUsername(username){
        return await this.get(`/transactions/${username}`);
    }

}

module.exports = AccountApi;