'use strict';

const http      = require('http');

http.get({
  hostname : 'pokeapi.co'
, path     : '/api/v2/pokemon/212/'
, agent    : false
}, res => {
  let data = '';
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    let json = JSON.parse(data);
    console.log('<h1>' + json.id + ' - ' + json.name + '</id>');
  });
});
