import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";

const auth = getAuth(app);

const Register = () => {
  useEffect(() => {
    document.title = "ToyZone | Register";
  }, []);

  const { createUser, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo_url.value;

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

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log(createdUser);
          })
          .catch((error) => {
            console.log(error);
          });
        form.reset();
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-5 py-8 md:py-16">
      <div className="w-full md:max-w-lg m-auto border rounded-md px-6 py-12">
        <h1 className="text-3xl font-bold">Sign Up</h1>

        <p className="text-sm  text-red-500 font-medium py-2">{error}</p>

        <form onSubmit={handleRegister} className="mt-4">
          <div className="mb-2">
            <label className=" text-base font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              required
            />
          </div>
          <div className="mb-2">
            <label className=" text-base font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo_url"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
              required
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
          Have an account?
          <Link to="/login" className="text-purple-700 ps-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
