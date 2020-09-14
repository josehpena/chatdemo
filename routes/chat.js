var express = require('express');
var router = express.Router();

router.get('/chat', global.authenticationMiddleware(), function (req, res, next) {
    res.render('chat', {});
});

module.exports = router;
