interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  class ItemLoja implements Produto {
    constructor(public id: number, public nome: string, public preco: number) {}
  }
  

  const item = new ItemLoja(1, "Camiseta", 49.99);
  console.log(item);
  