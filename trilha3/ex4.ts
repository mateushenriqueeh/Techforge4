class Animal {
    private energia: number = 0;
  
    comer(quantidade: number): void {
      this.energia += quantidade;
      console.log(`Energia aumentada para ${this.energia}`);
    }
  
    statusEnergia(): void {
      console.log(`Energia atual: ${this.energia}`);
    }
  }
  
  class Leao extends Animal {
    comer(quantidade: number): void {
      console.log("O leão está caçando...");
      this.comer(-10);
      super.comer(quantidade);
    }
  }
  
  class Passaro extends Animal {
    comer(quantidade: number): void {
      console.log("O pássaro está se alimentando...");
      super.comer(quantidade);
    }
  }
  
  // Exemplo de uso
  const leao = new Leao();
  const passaro = new Passaro();
  
  leao.comer(20);
  leao.statusEnergia();
  
  passaro.comer(10);
  passaro.statusEnergia();
  