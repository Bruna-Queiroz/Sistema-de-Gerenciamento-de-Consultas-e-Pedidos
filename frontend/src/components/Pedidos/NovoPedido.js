import React, { useState } from 'react';

const NovoPedido = ({ onAdd }) => {
    const [produto, setProduto] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ produto, status });
        setProduto('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Produto" 
                value={produto} 
                onChange={(e) => setProduto(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Status" 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
            />
            <button type="submit">Adicionar Pedido</button>
        </form>
    );
};

export default NovoPedido;
