import React from "react";
import {
  FaFacebookMessenger,
  FaHeadphones,
  FaPlane,
  FaPlaneDeparture,
  FaSnapchat,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#3278AF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4  px-5 md:px-0 py-7 mb-8 md:mb-12">
      <div className="flex flex-col justify-center items-center space-y-2 px-4 py-2">
        <FaPlane className="text-3xl text-white" />
        <h3 className="text-base text-white font-semibold uppercase tracking-wider">
          Free Shipping
        </h3>
        <p className="text-base font-normal text-white text-center ">
          Free shipping in the continental US when you spend $99.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 px-4  py-2">
        <FaHeadphones className="text-3xl text-white" />
        <h3 className="text-base text-white font-semibold uppercase tracking-wider">
          Customer Service
        </h3>
        <p className="text-base font-normal text-white text-center ">
          We are available from Monday to Friday to answer your questions.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 px-4  py-2">
        <FaPlane className="text-3xl text-white" />
        <h3 className="text-base text-white font-semibold uppercase tracking-wider">
          Thousands of Review
        </h3>
        <p className="text-base font-normal text-white text-center ">
          Here directly from parents and grandparents like you!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 px-4  py-2">
        <FaFacebookMessenger className="text-3xl text-white" />
        <h3 className="text-base text-white font-semibold uppercase tracking-wider">
          Contact Us
        </h3>
        <p className="text-base font-normal text-white text-center ">
          We're here to help you! Just email us at toyzone@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Services;
