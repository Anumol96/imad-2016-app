var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article':{
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
    
},
 'articlea':{
    title:'my articlea..anumol',
    heading:'my articlea',
    date:'sept 5',
    head:'a malayalam songline',
    content:'<p>'+
            'Ponnolla thumbi poovali thumbi'+
            'Ad ad nee adad'+
            '</p>'}
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

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter +1;
    res.send(counter.toString());
});
    
    

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
