import { faker } from "@faker-js/faker";
import { Product, ProductSchema } from "./model";

export class ProductsController {
  products: Array<ProductSchema>;

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(10, 200), 10),
      });
    }
  }

  async create(data: Product) {
    const product: ProductSchema = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.products.push(product);
    return product;
  }

  find(): Array<Product> {
    return this.products;
  }

  async findOne(id: string) {
    return this.products.find((item) => item.id === id);
  }

  async update(id: string, changes: any) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      ("product not found");
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };

    return this.products[index];
  }

  async delete(id: string) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("product not found");
    }

    this.products.splice(index, 1);
    return { id };
  }
}
