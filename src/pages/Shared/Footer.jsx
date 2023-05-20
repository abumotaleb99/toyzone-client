import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#eeeeee]">
      <div className="max-w-7xl mx-auto footer px-5 md:px-2 py-10">
        <div>
          <Link href="/" className="flex justify-center items-center">
            <img src={logo} className="h-12 pr-1" alt="logo" /> ToyZone
          </Link>
          <p>Providing reliable services since 2001</p>
        </div>
        <div>
          <span className="text-sm text-[#999] font-semibold uppercase tracking-wide">
            Need Help?
          </span>
          <a className="link  link-hover cursor-pointer">Contact Us</a>
          <a className=" font-normal link-hover cursor-pointer">
            Shipping Services
          </a>
          <a className="link link-hover">Payment Options</a>
          <a className="link link-hover">Return & Exchanges</a>
          <a className="link link-hover">FAQs</a>
        </div>
        <div>
          <span className="text-sm text-[#999] font-semibold uppercase tracking-wide">
            The Company
          </span>
          <a className="link link-hover">Blog & News</a>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Services</a>
        </div>
        <div>
          <span className="text-sm text-[#999] font-semibold uppercase tracking-wide">
            Find Us On
          </span>
          <li className="list-none flex items-center gap-2">
            <FaFacebook />
            <a className="link link-hover">Facebook</a>
          </li>
          <li className="list-none flex items-center gap-2">
            <FaTwitter />
            <a className="link link-hover">Twitter</a>
          </li>
          <li className="list-none flex items-center gap-2">
            <FaInstagram />
            <a className="link link-hover">Instagram</a>
          </li>
          <li className="list-none flex items-center gap-2">
            <FaPinterest />
            <a className="link link-hover">Pinterest</a>
          </li>
        </div>
      </div>
      <div className="text-center text-sm font-normal  py-5 border-2">
        ©ToyZone 2023 | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
