import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function KitchenLogin() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8092/login", value, { withCredentials: true })
      .then((res) => {
        if (res.data.message === "Success") {
          navigate("/kitchen");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="min-w-[500px] bg-white p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-center text-xl font-bold">Login Kitchen</h2>
        <div className="mt-4 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-lg p-2"
            placeholder="youremail@example.com"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-lg p-2"
            placeholder="••••••••"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default KitchenLogin;
