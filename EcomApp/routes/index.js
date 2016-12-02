var express = require('express');
var router = express.Router();
var redis = require("redis");

// Add your cache name and access key.
var client = redis.createClient(6380, 'cacheISM6930.redis.cache.windows.net', { auth_pass: 'EH6e/d9G7VA5vmStzXmsh0Sq0ypDF3OBRBKukGVVhz0=', tls: { servername: 'cacheISM6930.redis.cache.windows.net' } });

router.get('/', function (req, res) {
    client.get('topproducts', function (err, string) {
        var obj = JSON.parse(string);
        console.log(obj);
        res.render('index.jade', {
            title: 'Ecomm',
            topproductlist: obj 
        });
    });
});

/* GET productlist page. */
router.get('/productlist', function (req, res) {
    var db = req.db;
    var collection = db.get('Products');
    var searchCrit = req.query['search'];
    if (req.query['search'] === null || req.query['search'] === undefined) {
        collection.find({}, {}, function (e, docs) {
            res.render('productlist', {
                "productlist": docs
            });
        });
    }
    else {
        collection.find({ TITLE: { '$regex': searchCrit, '$options': 'i' } } , {}, function (e, docs) {
            res.render('productlist', {
                "productlist": docs
            });
        });
    }


});

module.exports = router;