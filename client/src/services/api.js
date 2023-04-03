import axios from "axios";

// get products
export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/getAllProducts", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// delete all products
export const deleteAllProducts = async () => {
  try {
    const response = await axios(
      "http://localhost:5000/api/deleteAllProducts",
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// create new product
export const createNewProduct = async (formData, appendProductFromDatabase) => {
  try {
    const response = await axios("http://localhost:5000/api/addNewProduct", {
      method: "POST",
      data: formData,
    });
    appendProductFromDatabase(response.data);
  } catch (error) {
    console.log(error);
  }
};
