abstract class FavoriteManager {
    protected favorites: string[];
  
    constructor() {
      this.favorites = [];
    }
  
    abstract addFavorite(item: string): void;
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.push(item);
        this.favorites.sort(); // Ordena alfabeticamente
      }
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.unshift(item); // Adiciona no início
      }
    }
  }
  
  // Exemplo de uso
  const movies = new MoviesFavoriteManager();
  movies.addFavorite("Inception");
  movies.addFavorite("Avatar");
  movies.addFavorite("Inception"); // Duplicado, será ignorado
  console.log(movies.getFavorites());
  
  const books = new BooksFavoriteManager();
  books.addFavorite("1984");
  books.addFavorite("O Senhor dos Anéis");
  console.log(books.getFavorites());
  