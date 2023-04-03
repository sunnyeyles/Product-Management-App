import express from "express";
import { getProducts, deleteAllProducts, createProduct } from "./controller.js";

// declare router
const productRouter = express.Router();
// routes
productRouter
  .get("/getAllProducts", getProducts)
  .delete("/deleteAllProducts", deleteAllProducts)
  .post("/addNewProduct", createProduct);
// export
export default productRouter;
