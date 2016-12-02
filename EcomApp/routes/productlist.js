var express = require('express');
var router = express.Router();
//console.log('Here');
//
/* GET home page. */
router.get('/', function (req, res) {
    res.render('productlist', { title: 'ProductList' });
});
//router.post("/productlist", function (req, res) {
//    console.log('Here2');
//    console.log(req.body.query);
//    var db = req.db;
//    var collection = db.get('Products');
//    collection.find({ "CATEGORY": "Cell Phones & Accessories" }, {}, function (e, docs) {
//        res.json(docs);
//        console.log(docs);
//    });
//});
//router.all('/productlist', function (req, res) {
//    if (req.method === 'GET') {
//        console.log('Here11');
//    } if (req.method === 'POST') {
//        console.log('Here22');
//    } else {
//        console.log('Here333');
//    }
//});