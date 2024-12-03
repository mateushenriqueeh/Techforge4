interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    private livros: LivroBiblioteca[] = [];
  
    adicionarLivro(livro: LivroBiblioteca): void {
      this.livros.push(livro);
    }
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero === genero);
    }
  
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor === autor);
    }
  
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }

  const bibliotecaGestao = new BibliotecaGestao();
  bibliotecaGestao.adicionarLivro({ titulo: "Livro A", autor: "Autor A", genero: "Ficção", disponivel: true });
  bibliotecaGestao.adicionarLivro({ titulo: "Livro B", autor: "Autor B", genero: "Fantasia", disponivel: false });
  bibliotecaGestao.adicionarLivro({ titulo: "Livro C", autor: "Autor A", genero: "Ficção", disponivel: true });
  
  console.log(bibliotecaGestao.filtrarPorGenero("Ficção"));
  console.log(bibliotecaGestao.buscarPorAutor("Autor A"));
  console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());
  