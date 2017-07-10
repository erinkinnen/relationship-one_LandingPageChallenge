var express = require('express');
var app = express();
var path = require('path');

app.set("port", (process.env.PORT || 5000));

app.get('/', function(req, res) {
    console.log('Base URL reached');
    res.sendFile(path.resolve('server/public/views/index.html'));
}); // end base url

app.use(express.static('server/public/'));

app.listen(app.get("port"), function() {
    console.log('Server running on port: ', app.get("port"));
});
