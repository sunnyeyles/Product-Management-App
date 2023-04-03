import Product from "./model.js";

// get products
export const getProducts = async (req, res, next) => {
  try {
    const filter = {};
    const all = await Product.find(filter);
    res.send(all);
  } catch (error) {
    next(error);
  }
};

// delete all products
export const deleteAllProducts = async (req, res, next) => {
  try {
    await Product.deleteMany({});
    res.json({ message: "All products deleted" });
  } catch (error) {
    next(error);
  }
};

// create a new product
export const createProduct = async (req, res, next) => {
  try {
    const { product, price } = req.body;
    const newProduct = await Product.create({ product, price });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
