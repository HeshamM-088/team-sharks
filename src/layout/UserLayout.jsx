import StoreContext from "../context/Store";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/product-details/ProductDetails";
import NotFound from "../pages/404/NotFound";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <div>
      <Header />

      <div className="min-h-[80vh]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<ProductDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
