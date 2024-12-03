abstract class Inventory {
    protected items: Record<string, number>;
  
    constructor() {
      this.items = {};
    }
  
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      if (this.items[item]) {
        this.items[item] += quantity;
      } else {
        this.items[item] = quantity;
      }
    }
  
    removeItem(item: string): void {
      delete this.items[item];
    }
  }
  
  class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      const currentQuantity = this.items[item] || 0;
      const totalQuantity = currentQuantity + quantity;
  
      if (totalQuantity > 10) {
        this.items[item] = 10; 
      } else {
        this.items[item] = totalQuantity;
      }
    }
  
    removeItem(item: string): void {
      delete this.items[item];
    }
  }
  
  // Exemplo de uso
  const warehouse = new WarehouseInventory();
  warehouse.addItem("Caixa", 50);
  warehouse.addItem("Palete", 30);
  console.log(warehouse.getInventory());
  
  const store = new StoreInventory();
  store.addItem("Chocolate", 8);
  store.addItem("Chocolate", 5);
  console.log(store.getInventory());
  