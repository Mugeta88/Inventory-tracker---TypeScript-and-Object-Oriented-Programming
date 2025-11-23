import {Product} from "./Product";


export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number){
        super(sku, name, price);
        this.weight = weight;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and has a sku number of: ${this.sku}.`
    }

    getPriceWithTax(quantity: number) {
        const taxRate = 0.10;
        return (this.price * quantity) * (1 + taxRate);
    }

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

}