const accountResolvers = require("./account_resolvers");
const authResolvers = require("./auth_resolvers");

//libreria para unir resolvers
const lodash = require("lodash");

//unimos los resolvers
const resolvers = lodash.merge(accountResolvers, authResolvers);

module.exports = resolvers;