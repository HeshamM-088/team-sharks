import { Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import StoreContext from "./context/Store";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const getUsers = async () => {
    const api = "https://jsonplaceholder.typicode.com/users";

    axios({
      method: "POST",
      url: api,
      data: user,
    }).then((anything) => {
      console.log(anything.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <StoreContext>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </StoreContext>
  );
};

export default App;
