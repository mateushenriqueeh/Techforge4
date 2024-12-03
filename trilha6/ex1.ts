class Order {
    private items: { name: string; price: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: boolean = false;
    private shippingStatus: boolean = false;
  
    addItem(name: string, price: number): void {
      this.items.push({ name, price });
      this.calculateTotalPrice();
    }
  
    private calculateTotalPrice(): void {
      this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    }
  
    processPayment(): void {
      if (this.totalPrice > 0) {
        this.paymentStatus = true;
      }
    }
  
    updateShippingStatus(): void {
      if (this.paymentStatus) {
        this.shippingStatus = true;
      }
    }
  
    getOrderStatus(): object {
      return {
        items: this.items,
        totalPrice: this.totalPrice,
        paymentStatus: this.paymentStatus,
        shippingStatus: this.shippingStatus,
      };
    }
  }
  
  // Exemplo de uso
  const order = new Order();
  order.addItem("Produto A", 50);
  order.processPayment();
  order.updateShippingStatus();
  console.log(order.getOrderStatus());

  