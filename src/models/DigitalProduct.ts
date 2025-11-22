import Product from "./Product.ts";

class DigitalProduct extends Product {
    fileSize: number;


    constructor(sku: string, name: string, price: number){
        super(sku, name, price);
        this.fileSize = this.fileSize;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and has a sku number of: ${this.sku}.`
    }

    getPriceWithTax(quantity: number) {
        return (this.price * quantity);
    }

    getFileSize() {
        return `${this.fileSize}megabytes`;
    }
}