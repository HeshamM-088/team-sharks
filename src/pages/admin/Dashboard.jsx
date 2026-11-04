import { Link } from "react-router-dom";
import { FiPackage, FiArrowLeft } from "react-icons/fi";
import { useProducts } from "../../context/Store";

const Dashboard = () => {
  const { items } = useProducts();

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800">لوحة التحكم</h1>
          <p className="mt-2 text-slate-500">
            مرحباً بك في لوحة إدارة المنتجات
          </p>
        </header>

        <Link
          to="/admin/products"
          className="group block max-w-sm rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <FiPackage size={28} />
            </div>

            <span className="text-slate-400 transition-transform group-hover:-translate-x-1">
              <FiArrowLeft size={22} />
            </span>
          </div>

          <p className="text-sm font-medium text-slate-500">إجمالي المنتجات</p>

          <h2 className="mt-2 text-4xl font-bold text-slate-800">
            {items.length}
          </h2>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            <span className="font-semibold text-teal-600">عرض المنتجات</span>

            <span className="text-sm text-slate-400">إدارة المنتجات</span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;
