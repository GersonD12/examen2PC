const { Router } = require('express');
const router = Router();

const logicaOrdenes = require('../controllers/ordenesController');

module.exports = (app) => {
    app.use('/', router);
    // Rutas de departamento
    router.get('/ordenes/find', logicaOrdenes.find);
    router.post('/ordenes/create', logicaOrdenes.create);
    router.get('/ordenes/finid/:id', logicaOrdenes.list);
    router.put('/ordenes/update/:id', logicaOrdenes.update);
    router.delete('/ordenes/delete/:id', logicaOrdenes.eliminarOrden);
};

