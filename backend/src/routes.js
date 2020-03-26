const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.store);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.store);
routes.put('/incidents/:id', incidentController.update);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;