import {PhysicalProduct} from "./models/PhysicalProduct";
import {DigitalProduct} from "./models/DigitalProduct";


let graffitiPainting = new PhysicalProduct("A902", "City Noise", 3000, 25);
let onlinePainting = new DigitalProduct("C423", "Waves and Sand", 1500, 300);

let products = [graffitiPainting, onlinePainting];

for (const product of products) {
    console.log(product.displayDetails());

    let finalPrice = product.getPriceWithTax(1);
    console.log(`Final price + tax: $${finalPrice}`)
}

