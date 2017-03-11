MOCK_DATA = MOCK_DATA || {};
MOCK_DATA.accountServ = {
  accounts : [
    {id:'1', name: 'a1', invoices: [{id:'11'}, {id:'12'}]},
    {id:'2', name: 'a2', invoices: [{id:'21'}, {id:'22'}]}
  ]
};

describe('accountServ', function () {
  var theServ, $httpBackend;
  
  beforeEach(function () {
    module('PbWs1App');
    
    inject(function ($injector) {
      theServ = $injector.get('AccountsServ');
      $httpBackend = $injector.get('$httpBackend');
    });
  });
    
  describe('get context data', function () {
    it('should return context', function () {
      expect(theServ.getContext().accounts).toBeDefined();
    });
    it('should return accounts', function () {
      expect(Array.isArray(theServ.getAccounts())).toEqual(true);
    });
    it('should return empty account', function () {
      expect(theServ.getBlancAccount().id).toEqual('');
      expect(theServ.getBlancAccount().name).toEqual('');
      expect(theServ.getBlancAccount().invoices.lendth).toEqual(0);
    });
  });

  describe('load accounts from server', function () {
    it('should load data from api', function () {
      $httpBackend.whenGet('http://thinkful-pb-1.getsandbox.com/accounts')
          .respond(MOCK_DATA.accountServ.accounts);
      theServ.loadAccounts().then(function () {
        expect(theServ.getAccounts()[1].name).toEqual('a1');
      });
      $httpBackend.flush();
    });
  });

  describe('save account name', function () {
    it('should create new record if id is not set', function () {
      //TODO
    });
    it('should update record on the server if id is set', function () {
      //TODO
    });
  });

  describe('delete account', function () {
    it('should call api with delete method', function () {
      //TODO
    });
  });

  describe('find account by Id', function () {
    var accounts;
    beforeEach(function () {
      accounts = MOCK_DATA.accountServ.accounts;
    });
    
    it('should find account', function () {
      expect(theServ.findAccountById(accounts, '2').name).toEqual('a2');
    });
    
    it('should return empty account if not found', function () {
      expect(theServ.findAccountById(accounts, 'a1').name).toEqual('');
    });
    
    it('should return empty account if no accounts', function () {
      expect(theServ.findAccountById([], '1').name).toEqual('');
    });
  });

  describe('update selected account', function () {
    it('should call api to fetch accounts', function () {
      //TODO
    });
    it('should set refreshed account with given id in the context', function () {
      //TODO
    });
  });

});