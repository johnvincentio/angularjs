angular
  .module('PbWs1App')
  .controller('InvoicesCtrl', InvoicesCtrl);

InvoicesCtrl.$inject = ['InvoicesServ', 'AccountsServ', '$state'];

function InvoicesCtrl (InvoicesServ, AccountsServ, $state) {
  var vm = this;
  
  //vm.invoices = InvoicesServ.getInvoices();
  
  vm.addNew = function (accountId) {
    //TODO: set blank invoice in context, show edit form
  };

  vm.edit = function (accountId, invoiceId) {
    //TODO: selected invoice in context, show edit form
  };

  vm.save = function () {
    //TODO: save invoice, then refresh accout, show invoices list
  };
  
  vm.delete = function (accountId, invoiceId) {
    //TODO: delete invoice, then refresh accout, show invoices list
  };
  
}
