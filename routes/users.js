var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function (req, res, next) {
  if (req.query.fail)
    res.render('signup', { message: 'Falha no cadastro do usuário!' });
  else
    res.render('signup', { message: null });
})

router.post('/signup', (req, res, next) => {
  db.createUser(req.body.username, req.body.password, req.body.email, (err, result) => {
    if (err) res.redirect('/signup?fail=true')
    require('../mail')(req.body.email, 'Bem vindo ao nosso chat', 'Olá ' + req.body.username + ', obrigado por se cadastrar! ')
    res.redirect('/')
  })
})

module.exports = router;
