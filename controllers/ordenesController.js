'use strict'
const db = require('../models');
const Orden = db.orden;
module.exports = {
    // Obtener una orden por ID
    async list(req, res) {
        const { id } = req.params;
        try {
            const ordenfl = await Orden.findAll({ where: { id: id } });
            
            if (!ordenfl || ordenfl.length === 0) {
                return res.status(404).json({ message: 'No se encontraron ordenes con esta ID.' });
            }
    
            return res.status(200).json(ordenfl);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    },

    async find(req, res) {
        //const operaciones = req.body;
        try {
            const resultado = await Orden.findAll();
            res.send(resultado);
        } catch (error) {
            console.log(error);
        }
    },

    async create(req, res) {
        try {
            
          const { nombre_cliente, total } = req.body;
          const ordenfl = await Orden.create({ nombre_cliente, total });
          res.status(201).json(ordenfl);
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensaje: 'Error en el servidor' });
        }
      },

      async update(req, res) {
        const { id } = req.params;
        try {
            const ordenfl = await Orden.findOne({ where: { id: id } });
            if (!ordenfl) {
                return res.status(404).json({ message: 'Oreden no encontrado!' });
            }
            else {
                try {                    
                    await Orden.update(
                        { nombre_cliente: req.body.nombre_cliente,
                            total: req.body.total },
                        { where: { id: id } }
                    );
                    return res.status(200).json({ message: 'Oreden actualizado!' });
                } catch (error) {
                    console.error(error);
                    return res.status(200).json({ error });
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    async eliminarOrden(req, res) {
        try {
          const ordenId = req.params.id;
          const orden = await Orden.findByPk(ordenId);
      
          if (!orden) {
            res.status(404).json({ mensaje: 'Orden no encontrada' });
            return;
          }
      
          await orden.destroy();
          res.json({ mensaje: 'Orden eliminada' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensaje: 'Error en el servidor' });
        }
      }
};