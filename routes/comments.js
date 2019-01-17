var express = require('express');
var router = express.Router();


router.get('/comments', (req,res)=>{
    res.render('comments')
});




module.exports = router;