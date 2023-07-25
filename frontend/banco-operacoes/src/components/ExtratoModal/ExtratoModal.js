import React from 'react';
import './ExtratoModal.css';

const ExtratoModal = ({ extrato, saldo, onClose }) => {
  return (
    <div className="extrato-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Extrato</h2>
        <ul>
          {extrato.map((operacao, index) => (
            <li key={index} className={operacao.tipo === 'deposito' ? 'deposito' : 'saque'}>
              {operacao.tipo === 'deposito' ? '+ ' : '- '}
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                operacao.valor
              )}
            </li>
          ))}
          <li className="saldo">
            Saldo: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldo)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExtratoModal;
