from flask import Flask, request, jsonify
from flask_cors import CORS
from threading import Timer

app = Flask(__name__)
CORS(app)

saldo = 0
operacoes = []
limite_diario = 3
limite_diario_usado = 0
limite_diario_valor = 500
time_to_reset = 86400  # 24 horas em segundos

def reset_limite_diario():
    global limite_diario_usado
    limite_diario_usado = 0
    # Agendando o próximo reset do limite diário
    timer = Timer(time_to_reset, reset_limite_diario)
    timer.start()

# Agendando o reset do limite diário
reset_timer = Timer(time_to_reset, reset_limite_diario)
reset_timer.start()

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
            operacoes.append({'tipo': 'deposito', 'valor': valor})
            return jsonify({'mensagem': f'Depósito de R${valor:.2f} realizado com sucesso.', 'saldo': saldo}), 200
        else:
            return jsonify({'mensagem': 'O valor do depósito deve ser maior que zero.'}), 400
    except ValueError:
        return jsonify({'mensagem': 'Valor inválido para depósito.'}), 400

@app.route('/saque', methods=['POST'])
def saque():
    global saldo, limite_diario_usado
    try:
        valor = float(request.json['valor'])
        if 0 < valor <= saldo:
            if limite_diario_usado < limite_diario:
                if valor <= limite_diario_valor:
                    saldo -= valor
                    operacoes.append({'tipo': 'saque', 'valor': valor})
                    limite_diario_usado += 1
                    return jsonify({'mensagem': f'Saque de R${valor:.2f} realizado com sucesso.', 'saldo': saldo}), 200
                else:
                    return jsonify({'mensagem': 'Valor de saque superior ao limite de R$500.00.'}), 400
            else:
                return jsonify({'mensagem': 'Limite diário de saques atingido.'}), 400
        else:
            return jsonify({'mensagem': 'Saldo insuficiente para realizar o saque.'}), 400
    except ValueError:
        return jsonify({'mensagem': 'Valor inválido para saque.'}), 400

@app.route('/extrato', methods=['GET'])
def extrato():
    return jsonify({'extrato': operacoes, 'saldo': saldo})

if __name__ == '__main__':
    app.run()
