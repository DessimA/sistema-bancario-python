import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const consultarSaldo = async () => {
  try {
    const response = await axios.get(`${baseURL}/saldo`);
    return response.data.saldo;
  } catch (error) {
    throw new Error('Erro ao consultar saldo.');
  }
};

export const realizarDeposito = async (valor) => {
  try {
    await axios.post(`${baseURL}/deposito`, { valor: Number(valor) });
  } catch (error) {
    throw new Error('Erro ao realizar depósito.');
  }
};

export const realizarSaque = async (valor) => {
  try {
    await axios.post(`${baseURL}/saque`, { valor: Number(valor) });
  } catch (error) {
    throw new Error(error.response.data.mensagem); // Capturando a mensagem de erro do backend
  }
};

export const consultarExtrato = async () => {
  try {
    const response = await axios.get(`${baseURL}/extrato`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao consultar extrato.');
  }
};
