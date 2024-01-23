var express = require('express');
const path = require('path');  // Use the pre-installed path module
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted!');
});

var server = app.listen(5555, function () {
    console.log('Node server is running.')
});