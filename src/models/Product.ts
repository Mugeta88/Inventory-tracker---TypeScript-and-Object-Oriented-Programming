export class Product {
    sku: string;
    name: string;
    price: number;


    constructor(sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and has a sku number of: ${this.sku}.`
    }

    getPriceWithTax(quantity: number, taxRate: number): number{
        return (this.price * quantity) * (1 + taxRate);
    }
}