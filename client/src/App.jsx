import ProductInput from "./components/ProductInput";
import { getProducts } from "./services/api";
import Wrapper from "./components/Wrapper";
function App() {
  // getProducts();
  return (
    <div className="App">
      {/* <button onClick={getProducts}>Get Products</button> */}
      <Wrapper />
    </div>
  );
}

export default App;
