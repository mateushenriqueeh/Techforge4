abstract class TaskManager {
    protected tasks: Set<string>;
  
    constructor() {
      this.tasks = new Set();
    }
  
    abstract addTask(task: string): void;
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  
  class Project extends TaskManager {
    addTask(task: string): void {
      if (!this.tasks.has(task)) {
        this.tasks.add(`Projeto: ${task}`);
      }
    }
  }
  
  class DailyTasks extends TaskManager {
    addTask(task: string): void {
      if (!this.tasks.has(task)) {
        this.tasks.add(`Diária: ${task}`);
      }
    }
  }
  
  // Exemplo de uso
  const project = new Project();
  project.addTask("Criar API");
  project.addTask("Criar API");
  console.log(project.listTasks());
  
  const daily = new DailyTasks();
  daily.addTask("Ler e-mails");
  daily.addTask("Fazer reunião");
  console.log(daily.listTasks());
  