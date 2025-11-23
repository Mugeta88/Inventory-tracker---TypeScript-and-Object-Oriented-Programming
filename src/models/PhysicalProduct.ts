import {Product} from "./Product";
import { DiscountableProduct } from "../interfaces/DiscountableProduct";




export class PhysicalProduct extends Product implements DiscountableProduct {
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



    applyDiscount(quantity: number): number {
        let discount = 0; 
        if (quantity >= 15) {
            discount += 0.10;
        }

        let discountPrice = this.price * (1 - discount);
        return discountPrice;
    }

}