import React from 'react';

const ConsultasList = ({ consultas }) => {
    return (
        <div>
            <h2>Lista de Consultas</h2>
            <ul>
                {consultas.map((consulta) => (
                    <li key={consulta.id}>{consulta.nome} - {consulta.data}</li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultasList;
