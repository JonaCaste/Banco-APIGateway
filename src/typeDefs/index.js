const accountTypeDefs = require('./account_type_def');
const auth_typeDefs = require('./auth_type_def');
const transactionTypeDefs = require('./transaction_type_def');

//unimos los typeDefs para devolver un arreglo
const schemasArray = [accountTypeDefs, auth_typeDefs, transactionTypeDefs];

module.exports = schemasArray;