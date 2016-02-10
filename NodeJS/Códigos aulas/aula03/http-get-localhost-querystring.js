'use strict';

const http = require('http');

http.get({
  hostname : 'localhost',
  path     : '/user?name=Wendell&teacher=true&age=23',
  port     : 3000,
  agent    : false
}, (response) => {
  let body = '';
  console.log('STATUS: ' + response.statusCode);
  console.log('HEADERS: ' + response.headers);
  
  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    console.log('Resposta: ' + body);
  });
});
