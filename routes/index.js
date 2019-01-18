var express = require('express');
var router = express.Router();
var db = require('../model/database.js')
var bodyParser=require('body-parser')
const fileUpload = require('express-fileupload')

router.get('/', (req, res)=>{
    db.any('SELECT * FROM author')
    .then((data)=> {
        res.render('index', {
            author:data
        })
    })
});

router.use(bodyParser.urlencoded({extended:false}))
router.post('/index',(req,res)=>{
    var fname =req.body.fname;
    var lname=req.body.lname;
    var bio=req.body.bio;
    var myUpload = req.body.myUpload;
db.none("INSERT INTO author(fname,lname,bio,img_path)VALUES($1,$2,$3,$4)",[fname,lname,bio,myUpload])
.then((data)=>{
    db.any('SELECT * FROM author')
    .then((results)=>{
        res.render('index', {
            author: results
        })
    })
})

})

router.use(fileUpload())
router.post('/index', (req,res)=>{
    var ourFile = req.files.myUpload;

    ourFile.mv("public/images" + req.files.myUpload, (err)=>{
        if (err){
            return res.status(500).send(err);
        }
        res.send('successful')
    })
})

module.exports = router;