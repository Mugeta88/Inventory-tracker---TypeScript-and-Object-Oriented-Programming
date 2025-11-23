1) I’m seeing that TypeScript helps catch mistakes before the code even runs. For example, if a property is supposed to be a number, TypeScript won’t let me accidentally set it to a string. It gives me an error right away.

2) Inheritance made things easier because both PhysicalProduct and DigitalProduct share a lot of the same features, like sku, name, price, and even some methods. Instead of writing all that code twice, I just put the shared stuff in the Product class.

3) Encapsulation basically lets me control who can change what. When I use things like private or protected, I can hide certain data so it doesn’t get changed accidentally from outside the class. This makes the code safer and more organized.

4) Polymorphism makes it really easy because all products share the same structure and methods from the base Product class. So if I want to add a new product type like SubscriptionProduct, I can create a new class that extends Product.