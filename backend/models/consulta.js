const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    cliente: String,
    data: Date,
    descricao: String,
});

module.exports = mongoose.model('Consulta', consultaSchema);
