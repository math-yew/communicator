var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
const opn = require('opn');
var config = require('./config');
var sys = require('util')
var exec = require('child_process').exec;
var app = module.exports = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers","*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
 });

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

var serverCtrl = require('./serverCtrl');
// app.get('/client/:ip', serverCtrl.startClient);
// app.post('/store', serverCtrl.storeResults);
// app.get('/allResults', serverCtrl.getPastResults);
app.get('/python/:site', serverCtrl.startServer);
// app.get('/myIp', serverCtrl.getMyIp);

/////////////////////////////////////////////////////

var port = config.PORT;
opn('http://localhost:'+port);

app.listen(port, function() {
  console.log('listening on port ', port);
});
