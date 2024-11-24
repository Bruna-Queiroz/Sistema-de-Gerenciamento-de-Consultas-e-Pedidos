const Consulta = require('../models/consulta');

exports.createConsulta = async (req, res) => {
    const { nomeCliente, dataConsulta, tipoConsulta } = req.body;
    const novaConsulta = new Consulta({ nomeCliente, dataConsulta, tipoConsulta });
    try {
        await novaConsulta.save();
        res.status(201).json({ message: 'Consulta criada com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

