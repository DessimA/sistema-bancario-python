import React from 'react';
import './SaldoContainer.css';

const SaldoContainer = ({ saldo, onConsultarSaldo }) => {
  return (
    <div className="saldo-container">
      <p className="saldo">Saldo: R$ {saldo.toFixed(2)}</p>
    </div>
  );
};

export default SaldoContainer;
