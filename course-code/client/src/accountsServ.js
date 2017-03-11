angular
  .module('PbWs1App')
  .factory('AccountsServ', AccountsServ);

AccountsServ.$inject(['Restangular']);  // dependency injection

function AccountsServ (Restangular) {
  var theServ = {context: { accounts: [] }};

  theServ.getContext = function () {
    return theServ.context;
  }

  theServ.getAccounts = function () {
    return theServ.context.accounts;
  }

  theServ.getBlancAccount = function () {
    return {id: '', name: '', invoices: []};
  }

  theServ.loadAccounts = function () {
    //TODO: call accounts API, return promise, then set list in context
  };

  theServ.save = function (account) {
    //TODO: depending on account id call create or update API, return promise
  };

  theServ.delete = function (accountId) {
    //TODO: call delete account API, return promise
  };

  theServ.findAccountById = function (accounts, id) {
    //TODO: search object by id in the list; return blank account if not found
  };

  theServ.updateCurrentAccount = function (accountId) {
    //TODO: load accounts, then find account by id and set it in the context
  };

  return theServ;
}
