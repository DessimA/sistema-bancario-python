# Banco de Operações 💰💳

![React](https://img.shields.io/badge/react-17.0.2-blue)
![axios](https://img.shields.io/badge/axios-0.22.0-green)
![Flask](https://img.shields.io/badge/flask-2.0.1-orange)
![Python](https://img.shields.io/badge/python-3.8.10-blue)

## Descrição 📝

O Banco de Operações é uma aplicação web que permite aos usuários realizar operações bancárias como depósito, saque e consultar saldo, além de visualizar um extrato das movimentações realizadas. A aplicação foi desenvolvida utilizando o framework ReactJS para o frontend e o Flask, um micro-framework em Python, para o backend. A comunicação entre o frontend e o backend é feita por meio de requisições HTTP utilizando a biblioteca Axios.

## Funcionalidades 💡

- Realizar depósito em conta.
- Realizar saque em conta (com limite diário de 3 saques e valor máximo de R$ 500 por saque).
- Consultar saldo atual da conta.
- Visualizar extrato das movimentações realizadas (depósitos e saques).

## Tecnologias Utilizadas 🛠️

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [axios](https://axios-http.com/) - Biblioteca JavaScript para realizar requisições HTTP.
- [Flask](https://flask.palletsprojects.com/) - Micro-framework Python para desenvolvimento web.
- [Python](https://www.python.org/) - Linguagem de programação utilizada no backend.
- [Node.js](https://nodejs.org/) - Ambiente de execução do JavaScript.
- [npm](https://www.npmjs.com/) - Gerenciador de pacotes do Node.js.
- [Git](https://git-scm.com/) - Sistema de controle de versão.

## Como Executar 🚀

### Pré-requisitos 📋

- Node.js - Instale a versão LTS mais recente do Node.js no [site oficial](https://nodejs.org/).
- Python - Instale o Python 3 no [site oficial](https://www.python.org/).
- Git - Instale o Git no [site oficial](https://git-scm.com/).

### Clonar o Repositório 🔽

Abra o terminal (ou o Git Bash) e clone o repositório usando o seguinte comando:

```bash
git clone https://github.com/seu-usuario/banco-operacoes.git
```

### Backend - Configuração e Execução 🖥️

1. Acesse o diretório do backend:

```bash
cd backend/banco-operacoes
```

2. Crie um ambiente virtual (recomendado):

```bash
python -m venv venv
```

3. Ative o ambiente virtual (Windows):

```bash
venv\Scripts\activate
```

ou (Linux/macOS):

```bash
source venv/bin/activate
```

4. Instale as dependências do backend:

```bash
pip install flask flask_cors
```

5. Execute o servidor backend:

```bash
python app.py
```

O servidor backend estará rodando em `http://localhost:5000`.

### Frontend - Configuração e Execução 🌐

1. Acesse o diretório do frontend:

```bash
cd frontend/banco-operacoes
```

2. Instale as dependências do frontend:

```bash
npm install
```

3. Execute o aplicativo frontend:

```bash
npm start
```

O aplicativo frontend estará rodando em `http://localhost:3000`.

Agora você pode acessar a aplicação no navegador em `http://localhost:3000`.

## Licença 📄

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---