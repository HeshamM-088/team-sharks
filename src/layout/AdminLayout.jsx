import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import Dashboard from "./../pages/admin/Dashboard";
import DashboardProducts from "../pages/admin/products/DashboardProducts";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<DashboardProducts />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
