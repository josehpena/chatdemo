var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('login', { title: 'Login', message: null })
})

router.get('/login', function (req, res) {
    if (req.query.fail)
        res.render('login', { message: ' Usuário e/ou senha incorretos!', error: true });
    else if (req.query.reset)
        res.render('login', { message: "A sua nova senha chegará no seu email em instantes!", error: false })
    else
        res.render('login', { message: null });
})

router.post('/login',
    passport.authenticate('local', { successRedirect: '/index', failureRedirect: '/login?failt=true' }));

router.post('/logoff', (req, res, next) => {
    req.logOut();
    res.redirect('/login');
})

module.exports = router;