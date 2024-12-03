class Pagamento {
    processar(): void {
      console.log("Processando pagamento...");
    }
  }
  
  class PagamentoCartao extends Pagamento {
    private validarCartao(): boolean {
      console.log("Validando cartão...");
      return true;
    }
  
    processar(): void {
      if (this.validarCartao()) {
        console.log("Pagamento com cartão processado com sucesso.");
      }
    }
  }
  
  class PagamentoBoleto extends Pagamento {
    processar(): void {
      console.log("Gerando código de boleto...");
      console.log("Pagamento com boleto gerado com sucesso.");
    }
  }
  
  function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => pagamento.processar());
  }
  
  // Exemplo de uso
  const pagamentos: Pagamento[] = [new PagamentoCartao(), new PagamentoBoleto()];
  processarPagamentos(pagamentos);
  