var express = require('express');
var router = express.Router();
console.log('Here');
//
/* GET home page. */
router.get('/', function (req, res) {
    res.render('productlist', { title: 'ProductList' });
    console.log('Here');
});