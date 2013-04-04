var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/../webapp'));

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});

app.get('/people', function (req, res) {
    res.send([
        {_id: 1, name: "Jack", avatar: "/img/skellington.png"},
        {_id: 2, name: "Frank", avatar: "/img/frankenstein.png"},
        {_id: 3, name: "Vlad", avatar: "/img/dracula.png"},
        {_id: 4, name: "Paul", avatar: "/img/alien.png"}
    ]);
});