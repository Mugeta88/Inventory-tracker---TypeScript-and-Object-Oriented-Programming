import { Product } from "../models/Product";

export function calculateTax(product: Product, taxRate: number = 0.1): number {
    return product.price * (1 + taxRate);

}