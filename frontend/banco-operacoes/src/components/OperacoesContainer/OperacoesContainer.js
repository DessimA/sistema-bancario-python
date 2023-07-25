import React from 'react';
import './OperacoesContainer.css';

const OperacoesContainer = ({ onRealizarDeposito, onRealizarSaque, onExtrato }) => {
  return (
    <div className="operacoes-container">
      <button className="depositar" onClick={onRealizarDeposito}>
        Depositar
      </button>
      <button className="sacar" onClick={onRealizarSaque}>
        Sacar
      </button>
      <button className="extrato" onClick={onExtrato}>
        Extrato
      </button>
    </div>
  );
};

export default OperacoesContainer;
