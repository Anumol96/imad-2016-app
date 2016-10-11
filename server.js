var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    title:'my article..anumol',
    heading:'my article',
    date:'sept 5',
    head:'a malayalam song',
    content:'<p>'+
            'Ponnolla thumbi poovali thumbi'+
            'Ad ad nee adad '+
            'Nakshtara poove navarathri poove'+
            'Azhakin poonchol adad'+
            'Neeyillenkil innen janmam'+ 
            'Venal kanavayi poy poyene'+
            'Neyillenkil swapnam polum'+
            'Minnal kathirukalayi poyene'+
            '</p>'
};

function createTemplate(data){
    
var title=data.title;
var heading=data.heading;
var date=data.date;
var head=data.head;
var content=data.content;
var htmlTemplate = '<html> <head><title>'+title+
        '</title><meta name="viewport" content="width-device-width,initial-scole=1"/>'+
        '<link href="/ui/style.css" rel="stylesheet" /></head><body>'+
        '<div class="container"><div><a href="/">HOME</a></div><hr/>'+
        '<h4>'+ heading+'</h4><h2>'+date+'</h2><div><h2>'+ head+'</h2></div>'+content+'</div></body</html>';

return htmlTemplate;

}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article', function (req, res) {
  res.send(createTemplate(article));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
