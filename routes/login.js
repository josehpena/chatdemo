var express = require('express');
var router = express.Router();

router.post('/logoff', (req, res, next) => {
    req.logOut();
    res.redirect('/login');
})