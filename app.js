var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.set('views', 'views')

app.set(express.static(__dirname + '/public'));


app.use(require('./routes/index'));

app.use(require('./routes/form'));
app.use(require('./routes/comments'));




app.listen(3000, ()=>{
    console.log('running on port 3000')
});