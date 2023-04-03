import { faker } from "@faker-js/faker";
import Product from "./model.js";

export const generateFakeProducts = async (numOfItems) => {
  const fakeProducts = [];
  for (let i = 0; i < numOfItems; i++) {
    const newProduct = {
      product: faker.commerce.product(),
      price: Math.floor(Math.random() * 2000),
    };
    fakeProducts.push(newProduct);
  }
  await Product.create(fakeProducts);
  console.log(fakeProducts);
};
