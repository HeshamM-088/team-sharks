import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";

const Header = () => {
  const links = [
    { id: 0, name: "Home", to: "/" },
    { id: 1, name: "Products", to: "/products" },
    { id: 2, name: "Admin", to: "/admin" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map(({ id, name, to }) => (
              <li key={id}>
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Commerce</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ id, name, to }) => (
            <li key={id}>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" to="/login">
          <RiLoginCircleLine className="text-2xl font-bold" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
