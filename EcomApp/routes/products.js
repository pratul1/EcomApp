var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/productlist', function (req, res) {
    var db = req.db;
    var collection = db.get('Product');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});


router.get('/topproductlist', function (req, res) {
    var db = req.db;
    var collection = db.get('Product');
    collection.find({"_id": "583e2545c9ee4c26f02e3917"}, {}, function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;