angular
  .module('PbWs1App')
  .factory('InvoicesServ', InvoicesServ);

InvoicesServ.$inject(['Restangular', 'AccountsServ']);

function InvoicesServ (Restangular, AccountsServ) {
  var theServ = {};
  
  theServ.getEmptyInvoice = function () {
    return {id:'', name:'', accountid: accountid, amount:0, due:0 };
  };
  
  theServ.save = function (invoice) {
    //TODO: depending on invoice id call create or update API, return promise
  };
  
  theServ.delete = function (accountId, invoiceId) {
    //TODO: call delete account API, return promise
  };

  theServ.findInvoiceById = function (accountid, invoiceid) {
    //TODO: search invoice by id in the list; return blank invoice if not found
  }

  theServ.getInvoices = function () {
    //TODO (bonus): get all invoices for all or filtered accounts for invoices tab
  };
  
  return theServ;
}
