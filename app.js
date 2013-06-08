var ecstatic = require('ecstatic'),
  flatiron = require('flatiron'),
  path = require('path'),
  app = flatiron.app;

app.use(flatiron.plugins.http, {
  before: [
    ecstatic({ root: __dirname + '/public/' })
  ]
});

app.listen( 8422, function () {
  console.log( 'http:// 8422 listening' );
});