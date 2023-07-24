import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [saldo, setSaldo] = useState(0);
  const [valorOperacao, setValorOperacao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [modoEscuro, setModoEscuro] = useState(false);

  const consultarSaldo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/saldo');
      setSaldo(response.data.saldo);
      setMensagem('');
    } catch (error) {
      setMensagem('Erro ao consultar saldo.');
    }
  };

  const realizarDeposito = async () => {
    try {
      await axios.post('http://localhost:5000/deposito', { valor: Number(valorOperacao) });
      setValorOperacao('');
      consultarSaldo();
      setMensagem('Depósito realizado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao realizar depósito.');
    }
  };

  const realizarSaque = async () => {
    try {
      await axios.post('http://localhost:5000/saque', { valor: Number(valorOperacao) });
      setValorOperacao('');
      consultarSaldo();
      setMensagem('Saque realizado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao realizar saque.');
    }
  };

  const toggleModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className={`container ${modoEscuro ? 'modo-escuro' : ''}`}>
      <header>
        <h1>Banco React</h1>
        <button className="modo-escuro-button" onClick={toggleModoEscuro}>
        {modoEscuro ? '🌞' : '🌜'}
          {modoEscuro ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </header>
      <input
        type="number"
        placeholder="Digite o valor da operação"
        value={valorOperacao}
        onChange={(e) => setValorOperacao(e.target.value)}
      />
      <div className="saldo-container">
        <button className="button-consultar-saldo" onClick={consultarSaldo}>
          Consultar Saldo
        </button>
        <p>Saldo: R$ {saldo.toFixed(2)}</p>
      </div>
      <div className="operacoes-container">
        <button className="depositar" onClick={realizarDeposito}>
          Depositar
        </button>
        <button className="sacar" onClick={realizarSaque}>
          Sacar
        </button>
      </div>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

export default App;
