import React from "react";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-367px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
