import {
  TextField,
  useTheme,
  ThemeProvider,
  FormControl,
} from "@mui/material";

const ProductInput = (props) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        onSubmit={props.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          margin: "1rem",
          padding: "0.2rem",
        }}
      >
        <TextField
          type="text"
          placeholder="Product"
          name="product"
          id="product"
          label="Product"
          variant="filled"
          required
          onChange={props.handleChange}
        />
        <TextField
          type="number"
          placeholder="Price"
          name="price"
          id="price"
          label="Price"
          variant="filled"
          onChange={props.handleChange}
        />
      </FormControl>
    </ThemeProvider>
  );
};

export default ProductInput;
