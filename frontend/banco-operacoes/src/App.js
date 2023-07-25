import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import InputValor from './components/InputValor/InputValor';
import SaldoContainer from './components/SaldoContainer/SaldoContainer';
import OperacoesContainer from './components/OperacoesContainer/OperacoesContainer';
import ExtratoModal from './components/ExtratoModal/ExtratoModal'; // Importar o novo componente ExtratoModal
import { consultarSaldo, realizarDeposito, realizarSaque, consultarExtrato } from './api';
import './App.css';

function App() {
  const [saldo, setSaldo] = useState(0);
  const [valorOperacao, setValorOperacao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [modoEscuro, setModoEscuro] = useState(false);
  const [extrato, setExtrato] = useState([]);
  const [showExtrato, setShowExtrato] = useState(false);

  useEffect(() => {
    handleConsultarSaldo();
  }, []);

  const toggleModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  const handleConsultarSaldo = () => {
    consultarSaldo()
      .then((saldoAtual) => setSaldo(parseFloat(saldoAtual)))
      .catch((error) => setMensagem(error.message));
  };

  const handleRealizarDeposito = () => {
    realizarDeposito(valorOperacao)
      .then(() => {
        setValorOperacao('');
        handleConsultarSaldo();
        setMensagem('Depósito realizado com sucesso!');
      })
      .catch((error) => setMensagem(error.message));
  };

  const handleRealizarSaque = () => {
    realizarSaque(valorOperacao)
      .then(() => {
        setValorOperacao('');
        handleConsultarSaldo();
        setMensagem('Saque realizado com sucesso!');
      })
      .catch((error) => setMensagem(error.message));
  };

  const handleExtrato = () => {
    consultarExtrato()
      .then((extratoData) => {
        setExtrato(extratoData.extrato);
        setShowExtrato(true);
      })
      .catch((error) => setMensagem(error.message));
  };

  const handleCloseExtrato = () => {
    setShowExtrato(false);
  };

  return (
    <div className={`container ${modoEscuro ? 'modo-escuro' : ''}`}>
      <Header modoEscuro={modoEscuro} onToggleModoEscuro={toggleModoEscuro} />
      <InputValor
        valorOperacao={valorOperacao}
        onChangeValorOperacao={(e) => setValorOperacao(e.target.value)}
      />
      <SaldoContainer saldo={saldo} onConsultarSaldo={handleConsultarSaldo} />
      <OperacoesContainer
        onRealizarDeposito={handleRealizarDeposito}
        onRealizarSaque={handleRealizarSaque}
        onExtrato={handleExtrato}
      />
      {showExtrato && extrato.length > 0 && ( // Exibir o ExtratoModal apenas se showExtrato for true e extrato possuir movimentações
        <ExtratoModal extrato={extrato} saldo={saldo} onClose={handleCloseExtrato} />
      )}
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

export default App;
