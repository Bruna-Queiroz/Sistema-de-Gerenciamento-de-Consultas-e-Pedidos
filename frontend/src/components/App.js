import React, { useState } from 'react';
import ConsultasList from './components/Consultas/ConsultasList';
import NovaConsulta from './components/Consultas/NovaConsulta';
import PedidosList from './components/Pedidos/PedidosList';
import NovoPedido from './components/Pedidos/NovoPedido';

const App = () => {
    const [consultas, setConsultas] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    // Funções para adicionar consultas e pedidos
    const addConsulta = (novaConsulta) => {
        setConsultas([...consultas, { id: Date.now(), ...novaConsulta }]);
    };

    const addPedido = (novoPedido) => {
        setPedidos([...pedidos, { id: Date.now(), ...novoPedido }]);
    };

    return (
        <div>
            <h1>Sistema de Gerenciamento de Consultas e Pedidos</h1>

            <section>
                <h2>Consultas</h2>
                <NovaConsulta onAdd={addConsulta} />
                <ConsultasList consultas={consultas} />
            </section>

            <section>
                <h2>Pedidos</h2>
                <NovoPedido onAdd={addPedido} />
                <PedidosList pedidos={pedidos} />
            </section>
        </div>
    );
};

export default App;
