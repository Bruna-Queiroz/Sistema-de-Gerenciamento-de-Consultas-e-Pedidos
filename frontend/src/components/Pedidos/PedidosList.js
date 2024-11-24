import React from 'react';

const PedidosList = ({ pedidos }) => {
    return (
        <div>
            <h2>Lista de Pedidos</h2>
            <ul>
                {pedidos.map((pedido) => (
                    <li key={pedido.id}>{pedido.produto} - {pedido.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default PedidosList;
