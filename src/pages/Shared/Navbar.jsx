import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#29DE92] px-2 mx-1"
              : "hover:text-[#29DE92] px-2 mx-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-toys"
          className={({ isActive }) =>
            isActive
              ? "text-[#29DE92] px-2 mx-1"
              : "hover:text-[#29DE92] px-2 mx-1"
          }
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-toys"
          className={({ isActive }) =>
            isActive
              ? "text-[#29DE92] px-2 mx-1"
              : "hover:text-[#29DE92] px-2 mx-1"
          }
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-toy"
          className={({ isActive }) =>
            isActive
              ? "text-[#29DE92] px-2 mx-1"
              : "hover:text-[#29DE92] px-2 mx-1"
          }
        >
          Add A Toy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#29DE92] px-2 mx-1"
              : "hover:text-[#29DE92] px-2 mx-1"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b-2">
      <div className="max-w-7xl mx-auto  navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link href="/" className="flex justify-center items-center">
            <img src={logo} className="h-12 pr-1" alt="logo" /> ToyZone
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-white bg-[#29DE92] hover:bg-[#32A575] px-7 py-2 rounded-md"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white bg-[#29DE92] hover:bg-[#32A575] px-7 py-2 rounded-md"
            >
              Login
            </Link>
          )}
          <>
            {user && (
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:bg-[#32A575] mr-2 md:ms-2"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} title={user.displayName} />
                </div>
              </label>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
