class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorEstoque(): number {
        return this.preco * this.quantidade;
    }
}

const produto = new Produto("Notebook", 3000, 5);
console.log(`Valor total em estoque: R$${produto.calcularValorEstoque()}`);