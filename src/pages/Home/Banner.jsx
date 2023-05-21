import React from "react";
import img1 from "../../assets/banner/banner1.jpg";
import img2 from "../../assets/banner/banner2.jpg";
import img3 from "../../assets/banner/banner3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full max-w-7xl mx-auto max-h-[500px] md:px-0">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full object-cover rounded-md" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-12 rounded-xl">
          <div className="space-y-5 sm:space-y-7 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              A New World of Play
            </h2>
            <p className="hidden sm:block">Explore new toys from the shop.</p>
            <div>
              <Link
                to="/login"
                className="text-white bg-[#29DE92] hover:bg-[#32A575] px-7 py-3 rounded-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover rounded-md" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-12 rounded-xl">
          <div className="space-y-5 sm:space-y-7 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Play Time Never Ends
            </h2>
            <p className="hidden sm:block">
              Create new fun with the latest toys from top brands.
            </p>
            <div>
              <Link
                to="/login"
                className="text-white bg-[#29DE92] hover:bg-[#32A575] px-7 py-3 rounded-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover rounded-md" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-12 rounded-xl">
          <div className="space-y-5 sm:space-y-7 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Kidding Around Toys
            </h2>
            <p className="hidden sm:block">The best toy store in Bangladesh.</p>
            <div>
              <Link
                to="/login"
                className="text-white bg-[#29DE92] hover:bg-[#32A575] px-7 py-3 rounded-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
