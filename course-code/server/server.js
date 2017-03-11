/** =================================================================
 * RESTFUL API config at https://git.getsandbox.com/thinkful-pb-1.git
 * Sandbox URL: http://thinkful-pb-1.getsandbox.com
 * ==================================================================
 */
/**
 * Thinkful PB workshop 1 Sandbox config
 */

function getAcct (state, req) {
    state.accounts = state.accounts || [];
    // route param {accountid} is available on req.params
    // use lodash to find the account in the array
    return _.find(state.accounts, function(current) {
        return current.id === Number(req.params.accountid);
    });
}

function getInvoice(state,req) {
    var account = getAcct(state,req);
    return _.find(account.invoices, function(invoice) {
        return invoice.id === Number(req.params.invoiceid);
    });
}

function nextId (arr) {
    var maxId = arr.reduce(function (prev, obj) {
        var objId = Number(obj.id);
        return (objId > prev) ? objId :prev;
    }, 0);
    return maxId + 1;
}

// A basic route returning a canned response
Sandbox.define('/test', 'GET', function(req, res) {
    //state.accounts.pop();
    res.send('Hello world ' + state.accounts.length);
});


// Using stateful behaviour to simulate creating accounts
Sandbox.define('/accounts', 'POST', function(req, res) {
    // retrieve accounts or, if there are none, init to empty array
    state.accounts = state.accounts || [];
    // generate next id
    req.body.id = nextId(state.accounts);
    // persist account by adding to the state object
    state.accounts.push(req.body);
    return res.json({status: "ok"});
});

// Using stateful behaviour to simulate getting all accounts
Sandbox.define('/accounts', 'GET', function(req, res) {
    state.accounts = state.accounts || [];
    return res.json(state.accounts);
});

// Using named route parameters to simulate getting a specific accounts
Sandbox.define('/accounts/{accountid}', 'GET', function(req, res) {
    var account = getAcct(state, req)
    return res.json(account);
});

// Using named route parameters to simulate deleting a specific accounts
Sandbox.define('/accounts/{accountid}', 'DELETE', function(req, res){
    var account = getAcct(state, req);
    var accountId = Number(account.id);
    // use lodash to remove account from the array
    _.remove(state.accounts, function(current) {
        return current.id === accountId;
    });
    return res.json({
        status: "ok",
        tmp: tmp,
        count: state.accounts.length
    });
});

Sandbox.define('/accounts/{accountid}','POST', function(req, res){
    var account = getAcct(state, req)
    account.name = req.body.name;

    res.type('application/json');
    res.status(200);
    res.json({"status": "ok"});
})

Sandbox.define('/accounts/{accountid}/invoices', 'POST', function(req, res) {
    var account = getAcct(state, req)

    account.invoices = account.invoices || [];
    req.body.id = nextId(account.invoices);
    account.invoices.push(req.body);
    return res.json({status: "ok"});
});

Sandbox.define('/accounts/{accountid}/invoices', 'GET', function(req, res) {
    var account = getAcct(state, req)
    account.invoices = account.invoices || [];
    return res.json(account.invoices);
});

Sandbox.define('/accounts/{accountid}/invoices/{invoiceid}', 'GET', function(req, res) {
    var account = getAcct(state, req)
    account.invoices = account.invoices || [];
    var invoiceid = req.params.invoiceid;
    var invoice = _.find(account.invoices, { "invoiceid": invoiceid});
    return res.json(invoice);
});

Sandbox.define('/accounts/{accountid}/invoices/{invoiceid}', 'DELETE', function(req, res) {
    var account = getAcct(state, req)
    account.invoices = account.invoices || [];
    var invoiceid = req.params.invoiceid;
    var invoice = _.remove(account.invoices, function (invoice) {
        return Number(invoice.id) === Number(invoiceid);
    });
    return res.json({status: "ok"});
});

Sandbox.define('/accounts/{accountid}/invoices/{invoiceid}/','POST', function(req, res){
    var invoice = getInvoice(state, req);
    if(invoice) {
        invoice.name = req.body.name;
        invoice.amount = req.body.amount;
        invoice.due = req.body.due;
        res.json({"status": "ok"});
    } else {
        res.json({error: 'Invoice not found'});
    }
});
