import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    document.title = "ToyZone | Login";
  }, []);

  const { signIn, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (password.length < 6) {
      setError("Please add at least 6 characters!");
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please add at least two uppercase!");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character!");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            setError(`Password didn't match.`);
            break;
          case "(auth/user-not-found":
            setError("User not found.");
            break;
          default:
            console.log(error.message);
            break;
        }
      });
  };

  return (
    <div className="px-5 py-8 md:py-16">
      <div className="w-full md:max-w-lg m-auto border rounded-md px-6 py-12">
        <h1 className="text-3xl font-bold">Login</h1>

        <p className="text-sm  text-red-500 font-medium py-2">{error}</p>

        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-2">
            <label className=" text-base font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
            />
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Password</label>
            <input
              type="password"
              name="password"
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
        <div className="flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full text-base tracking-wide flex justify-center items-center border gap-5 rounded-md cursor-pointer  px-4 py-2 mt-5"
        >
          <FaGoogle className="text-orange-400" /> Sign In with Google
        </button>

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
