import { NavLink } from "react-router-dom";
import { FiGrid, FiPackage, FiUser, FiChevronDown } from "react-icons/fi";

const AdminHeader = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
      isActive
        ? "bg-teal-50 text-teal-700"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
    }`;

  return (
    <nav
      dir="rtl"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
            <FiPackage size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-800">
              Store<span className="text-teal-600">Hub</span>
            </h1>
            <p className="text-xs text-slate-400">Admin Dashboard</p>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/admin" end className={navLinkClass}>
            <FiGrid size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/admin/products" className={navLinkClass}>
            <FiPackage size={18} />
            Products
          </NavLink>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <FiUser size={20} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Admin User</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>

          <FiChevronDown className="hidden text-slate-400 sm:block" />
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
