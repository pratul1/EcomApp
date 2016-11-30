var express = require('express');
var router = express.Router();

var redis = require("redis");

// Add your cache name and access key.
var client = redis.createClient(6380, 'cacheISM6930.redis.cache.windows.net', { auth_pass: 'EH6e/d9G7VA5vmStzXmsh0Sq0ypDF3OBRBKukGVVhz0=', tls: { servername: 'cacheISM6930.redis.cache.windows.net' } });

client.set("key1", "value", function (err, reply) {
    console.log(reply);
});

client.get("key1", function (err, reply) {
    console.log(reply);
});

client.hmset("tools", "webserver", "expressjs", "database", "mongoDB", "devops", "jenkins", function (err, reply) {
    console.log(err);
    console.log(reply);
});

client.hgetall("tools", function (err, reply) {
    console.log(err);
    console.log(reply);
});



/*
 * GET productlist.
 */
router.get('/productlist', function (req, res) {
    var db = req.db;
    var collection = db.get('Products');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});


router.get('/topproductlist', function (req, res) {
    var db = req.db;
    var collection = db.get('Products');
    collection.find({ "CATEGORY": "Cell Phones & Accessories"}, {}, function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;