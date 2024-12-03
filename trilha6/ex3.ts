class EmailSender {
    validateContact(contact: string): boolean {
      return /\S+@\S+\.\S+/.test(contact); 
    }
  
    sendEmail(contact: string, message: string): void {
      if (this.validateContact(contact)) {
        console.log(`Email enviado para ${contact}: ${message}`);
      } else {
        console.log("Contato inválido.");
      }
    }
  }
  

  const emailSender = new EmailSender();
  emailSender.sendEmail("teste@example.com", "Olá!");
  