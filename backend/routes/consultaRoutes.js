const express = require('express');
const Consulta = require('../models/consulta');
const router = express.Router();

router.get('/', async (req, res) => {
    const consultas = await Consulta.find();
    res.json(consultas);
});

router.post('/', async (req, res) => {
    const consulta = new Consulta(req.body);
    await consulta.save();
    res.json(consulta);
});

module.exports = router;
