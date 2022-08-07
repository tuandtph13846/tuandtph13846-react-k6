import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Client/Home";
import ClientLayouts from "./layouts/ClientLayouts";
import AdminLayout from "./layouts/AdminLayouts";
import Product from "./pages/Admin/Product/Product";
import Category from "./pages/Admin/Category/Category";
import Dashboard from "./pages/Admin/Dashboard";
import ProductAdd from "./pages/Admin/Product/ProductAdd";
import ProductEdit from "./pages/Admin/Product/ProductEdit";
import CategoryAdd from "./pages/Admin/Category/CategoryAdd";
import CategoryEdit from "./pages/Admin/Category/CategoryEdit";
import Signup from "./pages/Auth/signup";
import Signin from "./pages/Auth/signin";
import PrivateRouter from "./pages/Auth/PrivateRouter";
import ProductDetail from "./pages/Client/ProductDetail";
import ProductPage from "./pages/Client/Product";
import Cart from "./pages/Client/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<ClientLayouts />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>

        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products">
            <Route index element={<Product />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>

          <Route path="categorys">
            <Route index element={<Category />} />
            <Route path="add" element={<CategoryAdd />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
          </Route>
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
`;

export default App;
