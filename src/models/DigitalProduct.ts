import {Product} from "./Product";

export class DigitalProduct extends Product {
    fileSize: number;


    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and has a sku number of: ${this.sku}.`
    }

    getPriceWithTax(quantity: number) {
        return this.price * quantity;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }
}