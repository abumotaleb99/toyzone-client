import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-5 py-8 md:py-16">
      <div className="w-full md:max-w-lg m-auto border rounded-md px-6 py-12">
        <h1 className="text-3xl font-bold">Login</h1>

        <p className="text-sm  text-red-500 font-medium py-2">
          The password entered is wrong.
        </p>

        <form className="mt-4">
          <div className="mb-2">
            <label className=" text-base font-semibold">Email</label>
            <input
              type="email"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
            />
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Password</label>
            <input
              type="password"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
            />
          </div>
          <div className="mt-6">
            <input
              type="submit"
              className="w-full text-base text-white bg-[#29DE92] hover:bg-[#32A575] tracking-wide rounded-md cursor-pointer  px-4 py-2"
              value="Login"
            />
          </div>
        </form>

        <p className="text-sm font-medium mt-4">
          Don't have an account?
          <Link to="/register" className="text-purple-700 ps-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
