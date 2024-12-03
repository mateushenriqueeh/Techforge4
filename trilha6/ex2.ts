class UserManager {
    private users: string[] = [];
  
    createUser(name: string, email: string): void {
      this.users.push(name);
      this.sendEmail(email);
    }
  
    private sendEmail(email: string): void {
      console.log(`Email enviado para ${email}`);
    }
  }
  
  const userManager = new UserManager();
  userManager.createUser("João", "joao@example.com");
  