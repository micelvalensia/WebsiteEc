import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Loading from "../loading/Loading";
import { useAuth } from "../admin/api/useAuth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = useAuth();

  if (isAuthenticated === null) return <Loading />;
  if (isAuthenticated) return navigate("/admin/dashboard");

  if (load) {
    return <Loading />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8092/login", values, { withCredentials: true })
      .then((res) => {
        setLoad(true);
        if (res.data.message === "Success") {
          setLoad(false);
          navigate("/admin/crud");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  return (
    <>
      <div className="flex items-center p-5 justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
