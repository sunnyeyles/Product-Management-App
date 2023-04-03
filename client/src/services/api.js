import axios from "axios";

// get products
export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/getAllProducts", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// delete all products
export const deleteAllProducts = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/deleteAllProducts",
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      console.log("All products deleted");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

// create new product
export const createNewProduct = async (formData, appendProductFromDatabase) => {
  const body = JSON.stringify(formData);
  console.log(body);

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
