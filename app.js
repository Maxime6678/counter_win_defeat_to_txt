const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
var win = 0;
var loose = 0;

const app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './static')));

app.get('/', function (req, res, next) {
    res.render('index', {});
});

app.post('/edit', function(req, res, next) {
    var fileName = path.join(__dirname, './out/score.txt');

    if (req.body.add_win) win++;
    if (req.body.add_loose) loose++;
    if (req.body.remove_win) win = win - 1;
    if (req.body.remove_loose) loose = loose - 1;
    if (req.body.reset) {
        win = 0;
        loose = 0;
    }

    var final = win + "/" + loose;

    var stream = fs.createWriteStream(fileName);
    stream.once('open', function(fd) {
        stream.write(final);
        stream.end();
    });

    console.log("Edit out.txt");
    res.redirect('/');
});

app.listen(3000, function() {
    console.log("Launching the app ...");
    console.log("Opening browers")
    console.log("Server listen on 3000");
});