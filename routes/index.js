var express = require('express');
var router = express.Router();
var db = require('../model/database.js');
var bodyparser = require('body-parser');

router.get('/', (req, res)=>{
    db.any('SELECT * FROM blog')
    .then((data)=>{
        res.render('index', {
            blog: data
        })
    })
});

router.use(bodyparser.urlencoded({extended: false}));

router.post('/index', (req, res)=> {
    var title = req.body.title;
    var author = req.body.author;
    var category = req.body.category;
    var body = req.body.body;

    db.none("INSERT INTO blog(title, author, category, body) VALUES($1, $2, $3, $4)", [title, author, category, body])
    .then((data)=>{
        db.any('SELECT * FROM blog')
        .then((results)=> {
            res.render('blog', {
                blog: data
            })
        })
    })

})

module.exports = router;