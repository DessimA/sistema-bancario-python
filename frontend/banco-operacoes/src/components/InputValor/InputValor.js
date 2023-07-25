import React from 'react';
import './InputValor.css';

const InputValor = ({ valorOperacao, onChangeValorOperacao }) => {
  return (
    <input
      type="number"
      className="input-valor"
      placeholder="Digite o valor da operação"
      value={valorOperacao}
      onChange={onChangeValorOperacao}
    />
  );
};

export default InputValor;
