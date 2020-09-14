const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//routes.get('/users', DevController.index);
routes.post('/users', DevController.store);

routes.get('/search', SearchController.productSearch);

module.exports = routes;
