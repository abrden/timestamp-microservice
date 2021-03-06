'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    bodyParser = require('body-parser'),
    api = require('./app/timestamp.js'),
    port = process.env.PORT || 8080,
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);
api(app);

app.listen(port, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});