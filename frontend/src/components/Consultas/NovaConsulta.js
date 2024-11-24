import React, { useState } from 'react';

const NovaConsulta = ({ onAdd }) => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ nome, data });
        setNome('');
        setData('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
            />
            <input 
                type="date" 
                value={data} 
                onChange={(e) => setData(e.target.value)} 
            />
            <button type="submit">Adicionar Consulta</button>
        </form>
    );
};

export default NovaConsulta;
