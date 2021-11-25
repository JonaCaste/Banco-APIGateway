const accountResolvers = require("./account_resolvers");

//libreria para unir resolvers
const lodash = require("lodash");

//unimos los resolvers
const resolvers = lodash.merge(accountResolvers);

module.exports = resolvers;