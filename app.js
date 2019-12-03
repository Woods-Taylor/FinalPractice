var express = require('express');
var node = require('node-fetch');
var app = express();
app.use('view engine', 'ejs')
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

var img = '';
var year = '';
var title = '';

app.get('/', function (req, resp){
    fetchComic();
    res.render("index", { img: img, year: year, title: title });
});

function fetchComic(){
    fetch('url')
    .then(res => res.json())
    .then(data => {
        img = data.img;
        title = data.title;
        year = data.year;
    }).catch(err => {
        res.redirect('/error');
    });

    }

app.listen(port, function() {
    console.log('example')

});    