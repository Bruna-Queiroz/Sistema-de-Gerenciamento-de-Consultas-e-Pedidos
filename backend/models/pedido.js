const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: String,
    produto: String,
    valor: Number,
    status: String,
});

module.exports = mongoose.model('Pedido', pedidoSchema);
