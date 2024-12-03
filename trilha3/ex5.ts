abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}
  
    abstract calcularBonus(): number;
  
    getSalario(): number {
      return this.salario;
    }
  
    getNome(): string {
      return this.nome;
    }
  }
  
  class Gerente extends Funcionario {
    calcularBonus(): number {
      return this.getSalario() * 0.1;
    }
  }
  
  class Operario extends Funcionario {
    calcularBonus(): number {
      return this.getSalario() * 0.05;
    }
  }
  
  function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
      const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
      console.log(`Funcionário: ${funcionario.getNome()}, Salário final: ${salarioFinal}`);
    });
  }
  
  // Exemplo de uso
  const funcionarios: Funcionario[] = [
    new Gerente("João", 5000),
    new Operario("Maria", 2000)
  ];
  
  calcularSalarioComBonus(funcionarios);
  