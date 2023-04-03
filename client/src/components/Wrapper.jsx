import ProductInput from "./ProductInput";
import Typography from "@mui/joy/Typography";
import { useState, useEffect } from "react";
import {
  getProducts,
  deleteAllProducts,
  createNewProduct,
} from "../services/api.js";
import Buttons from "./Buttons";
import Cards from "./Cards";

const Wrapper = () => {
  // states
  const [products, setProducts] = useState([]);
  const [inputField, setInputField] = useState({ product: "", price: 0 });
  // functions
  useEffect(() => {
    // fetch all products in DB
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  // handle change in input field and update input field state
  const handleChange = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };
  // update state with fetched data from DB
  const appendProductFromDatabase = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // submit input data
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewProduct(inputField, appendProductFromDatabase);
    setInputField({ product: "", price: 0 });
  };

  // delete all products
  const handleDeleteAllProducts = async () => {
    await deleteAllProducts();
    setProducts([]);
  };

  return (
    <div>
      <Typography
        level="h1"
        fontWeight="lg"
        textColor="neutral.300"
        sx={{ textAlign: "center", margin: "1rem" }}
      >
        Sunny's Späti
      </Typography>
      <ProductInput
        delete="Delete All"
        add="Add Product"
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Buttons
        delete="delete all products"
        add="add product"
        handleClick={handleDeleteAllProducts}
        handleSubmit={handleSubmit}
      />
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((item, index) => (
          <Cards product={item.product} price={item.price} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Wrapper;
