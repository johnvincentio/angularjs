angular
  .module('PbWs1App')
  .controller('AccountsCtrl', AccountsCtrl);

AccountsCtrl.$inject = ['AccountsServ', '$state'];

function AccountsCtrl (AccountsServ, $state) {

  var vm = this;

  function loadAccounts() {
    //TODO: vm.ac = ... context
  }
  // load accounts when this file is loaded
  loadAccounts();
  
  vm.addNew = function () {
    //TODO: set blank account in context, show edit form
    $state.go('accounts.new');
  };

  vm.edit = function (accountId) {
    //TODO: set account by id in context, show edit form
    $state.go('accounts.edit');
  };

  vm.save = function () {
    //TODO: save form data, then refresh list and show list
  };
  
  vm.delete = function (accountId) {
    //TODO: save form data, then refresh list
  };
  
  vm.invoices = function (accountId) {
    //TODO: set account by id in context, show invoices list
    $state.go('accounts.invoices.list');
  }

}
