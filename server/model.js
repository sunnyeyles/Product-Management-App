import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductsSchema = new Schema({
  product: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", ProductsSchema);

export default Product;
