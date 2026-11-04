import { Link } from "react-router-dom";
import { FiArrowRight, FiPackage } from "react-icons/fi";
import { useProducts } from "./../../../context/Store";

import { deleteProducts } from "./services";

const DashboardProducts = () => {
  const { items } = useProducts();

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <Link
            to="/admin"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-teal-600"
          >
            <FiArrowRight size={18} />
            العودة للوحة التحكم
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">المنتجات</h1>
              <p className="mt-2 text-slate-500">عرض جميع المنتجات المتاحة</p>
            </div>

            <div>
              <button className="btn btn-soft btn-lg">Add Product</button>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-teal-50 px-5 py-3 text-teal-700">
              <FiPackage size={22} />
              <span className="font-semibold">{items.length} منتجات</span>
            </div>
          </div>
        </header>

        {/* Products Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-137.5 text-right">
              <thead className="bg-slate-50">
                <tr className="text-sm text-slate-500">
                  <th className="px-6 py-5 font-semibold">المنتج</th>

                  <th className="px-6 py-5 font-semibold">اسم المنتج</th>

                  <th className="px-6 py-5 font-semibold">السعر</th>

                  <th className="px-6 py-5 font-semibold">actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {items.map((product) => (
                  <tr key={product.id} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 rounded-xl border border-slate-100 object-cover"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <span className="font-semibold text-slate-700">
                        {product.title}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="font-bold text-teal-600">
                        {product.price.toLocaleString("en-US")} EGP
                      </span>
                    </td>

                    <td>
                      <div className="flex gap-4">
                        <button className="btn btn-primary btn-sm">view</button>
                        <button className="btn btn-warning btn-sm">
                          edite
                        </button>
                        <button
                          onClick={() => deleteProducts(product)}
                          className="btn btn-error btn-sm"
                        >
                          del
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardProducts;
