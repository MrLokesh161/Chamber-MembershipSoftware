import React, { useState } from "react";
import icci from "../../../Assets/icci.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [aadhar, setaadhar] = useState();
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/existinglogin/",
        {
          email,
          aadhar,
        }
      );
      console.log(response.data);
      localStorage.setItem("Data", JSON.stringify(response.data));
      navigate("/formexisting");
    } catch (error) {
      setError("Invalid username or password");
    }
  };
  return (
    <div className=" bg-slate-200 h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={icci} alt="Chamber" />
          <h2 className="mt-10 text-center text-2xl  font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm leading-6 text-black font-bold"
              >
                Email Id
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  onChange={(e) => setemail(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="aadhar"
                className="block text-sm leading-6 text-black font-bold"
              >
                Aadhar Number
              </label>
              <div className="mt-2">
                <input
                  id="aadhar"
                  name="aadhar"
                  type="aadhar"
                  autocomplete="aadhar"
                  required
                  onChange={(e) => setaadhar(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 cursor-pointer px-6 py-3 rounded-lg text-white font-bold"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
