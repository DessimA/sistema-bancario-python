from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

saldo = 0

@app.route('/saldo', methods=['GET'])
def get_saldo():
    return jsonify({'saldo': saldo})

@app.route('/deposito', methods=['POST'])
def deposito():
    global saldo
    try:
        valor = float(request.json['valor'])
        if valor > 0:
            saldo += valor
            return jsonify({'mensagem': f'Depósito de R${valor:.2f} realizado com sucesso.', 'saldo': saldo}), 200
        else:
            return jsonify({'mensagem': 'O valor do depósito deve ser maior que zero.'}), 400
    except ValueError:
        return jsonify({'mensagem': 'Valor inválido para depósito.'}), 400

@app.route('/saque', methods=['POST'])
def saque():
    global saldo
    try:
        valor = float(request.json['valor'])
        if 0 < valor <= saldo:
            saldo -= valor
            return jsonify({'mensagem': f'Saque de R${valor:.2f} realizado com sucesso.', 'saldo': saldo}), 200
        else:
            return jsonify({'mensagem': 'Saldo insuficiente para realizar o saque.'}), 400
    except ValueError:
        return jsonify({'mensagem': 'Valor inválido para saque.'}), 400

if __name__ == '__main__':
    app.run()
