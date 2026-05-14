import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={Products} />
          <Route path="/products/:id" Component={ProductDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
