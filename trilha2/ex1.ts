class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
}

const conta = new ContaBancaria("João", 1000);
conta.depositar(500);
conta.sacar(200);
conta.sacar(1500);