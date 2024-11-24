const express = require('express');
const Pedido = require('../models/pedido');
const router = express.Router();

router.get('/', async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
});

router.post('/', async (req, res) => {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.json(pedido);
});

module.exports = router;
