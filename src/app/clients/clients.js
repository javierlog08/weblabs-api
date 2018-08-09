
const Http = require('../../utils/Http');


var Clients = function(req, res) {
    res.send('Welcome to the client module');
}

Http.get('/clients',Clients);