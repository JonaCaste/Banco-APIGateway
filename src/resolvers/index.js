const accountResolvers = require("./account_resolvers");
const authResolvers = require("./auth_resolvers");
const transactionResolver = require("./transaction_resolvers");

//libreria para unir resolvers
const lodash = require("lodash");

//unimos los resolvers
const resolvers = lodash.merge(accountResolvers, authResolvers, transactionResolver);

module.exports = resolvers;