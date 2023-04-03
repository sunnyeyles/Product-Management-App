import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./router.js";
import { connectDataBase } from "./connect.js";
import { generateFakeProducts } from "./seed.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDataBase();
generateFakeProducts(2);
app.use("/api", productRouter);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
