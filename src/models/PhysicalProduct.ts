import Product from "./Product.ts";


class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number){
        super(sku, name, price);
        this.weight = weight;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and has a sku number of: ${this.sku}.`
    }

    getPriceWithTax(quantity: number) {
        return (this.price * quantity) * (1 + 0.1);
    }

    getWeight() {
        return `${this.weight}kg`;
    }


}