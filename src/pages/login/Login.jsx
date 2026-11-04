import { useState } from "react";
import { Link } from "react-router-dom";

const apiLink = import.meta.env.VITE_API;

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await fetch(`${apiLink}/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      });
      const res = await req.json();

      console.log(res.token);

      // if (res.success) {
      //   setTimeout(() => {
      //     navigate("/login");
      //   }, 1000);
      // } else {
      //   throw Error();
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" flex flex-col space-y-4 items-center min-h-[80vh] justify-center bg-base-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 w-full max-w-sm shadow-xl"
      >
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <label className="form-control w-full">
            <span className="label-text mb-2">Email</span>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </label>

          <label className="form-control w-full mt-4">
            <span className="label-text mb-2">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </label>

          <button type="submit" className="btn btn-primary w-full mt-6">
            Login
          </button>
        </div>
      </form>

      <p className="text-[1.2em]">
        don't have account ?{" "}
        <Link to="/register" className="border-b-blue-900 border-b-2 font-bold">
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
