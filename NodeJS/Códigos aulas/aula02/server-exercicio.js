'use strict';

var now = (new Date()).toJSON();

const http = require('http')
    , API_ROUTE = '/api/pokemons/'
    , SUCCESS = {
        message : 'Route OK'
      , returned_at : now
      }
    , ERROR = {
        message : 'Warning: Route NOT OK!!!'
      , returned_at : now
    };

http.createServer(function(req, res) {
  switch(req.url) {
    case API_ROUTE + 'create':
    case API_ROUTE + 'read':
    case API_ROUTE + 'update':
    case API_ROUTE + 'delete':
      res.writeHead(200, { 'Content-Type' : 'application/json' });
      res.write(JSON.stringify(SUCCESS));
      break;
    default:
      res.writeHead(404, { 'Content-Type' : 'application/json' });
      res.write(JSON.stringify(ERROR));
      break;
  }
  res.end();
}).listen(3000, function() {
  console.log('Servidor rodando em localhost:3000');
});
