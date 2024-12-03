interface Documento {
    titulo: string;
    conteudo: string;
  }
  
  class Texto implements Documento {
    constructor(public titulo: string, public conteudo: string) {}
  
    exibir(): string {
      return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
  }
 
  const texto = new Texto("Introdução", "Este é o conteúdo do documento.");
  console.log(texto.exibir());
  