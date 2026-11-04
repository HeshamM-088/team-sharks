import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiLink = import.meta.env.VITE_API;

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
  });

  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    console.log(img);

    const allData = new FormData();

    allData.append("name", user.name);
    allData.append("email", user.email);
    allData.append("password", user.password);
    allData.append("gender", user.gender);
    allData.append("image", img);

    // try {
    //   const req = await fetch(`${apiLink}/auth/register`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //     body: JSON.stringify(user),
    //   });
    //   const res = await req.json();
    //   if (res.success) {
    //     setTimeout(() => {
    //       navigate("/login");
    //     }, 1000);
    //   } else {
    //     throw Error();
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <div className="flex justify-center items-center w-full p-[2em]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">UserName</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
          className="input"
          placeholder="User Name"
        />

        <label className="label">Email</label>
        <input
          type="text"
          className="input"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />

        <select
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
          defaultValue="Select Gender"
          className="select"
        >
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="file"
          className="input"
          onChange={(e) => setImg(e.target.files[0])}
        />

        <button className="btn btn-neutral mt-4" onClick={handleRegister}>
          Create Account
        </button>
      </fieldset>
    </div>
  );
};

export default Register;
