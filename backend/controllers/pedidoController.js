const Pedido = require('../models/pedido');

exports.createPedido = async (req, res) => {
    const { nomeCliente, dataPedido, tipoProduto, quantidade } = req.body;
    const novoPedido = new Pedido({ nomeCliente, dataPedido, tipoProduto, quantidade });
    try {
        await novoPedido.save();
        res.status(201).json({ message: 'Pedido criado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
