interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  
  class Loja {
    private produtos: ProdutoLoja[] = [];
  
    adicionarProduto(produto: ProdutoLoja): void {
      this.produtos.push(produto);
    }
  
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
      return this.produtos.find(produto => produto.codigo === codigo);
    }
  }

  const loja = new Loja();
  loja.adicionarProduto({ codigo: 101, nome: "Notebook" });
  loja.adicionarProduto({ codigo: 102, nome: "Smartphone" });
  
  console.log(loja.buscarProdutoPorCodigo(101));
  console.log(loja.buscarProdutoPorCodigo(999)); 
  