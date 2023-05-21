import React, { useEffect, useState } from "react";
import Toy from "./Toy";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    fetch(`https://y-sigma-snowy.vercel.app/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 pb-10 md:pb-24">
      <h3 className="text-2xl md:text-3xl font-bold text-center pb-8 md:pb-12">
        Shop By Category
      </h3>
      <div className="flex justify-center pb-5">
        <ul className="flex gap-1">
          <li>
            <button
              onClick={() => handleTabClick("All")}
              className={`text-white bg-[#29DE92] px-5 py-2 rounded-md ${
                activeTab == "All" ? "bg-[#32A575]" : ""
              }`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Car")}
              className={`text-white bg-[#29DE92] px-5 py-2 rounded-md  ${
                activeTab == "Car" ? "bg-[#32A575]" : ""
              }`}
            >
              Car
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Truck")}
              className={`text-white bg-[#29DE92] px-5 py-2 rounded-md  ${
                activeTab == "Truck" ? "bg-[#32A575]" : ""
              }`}
            >
              Truck
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Racing Car")}
              className={`text-white bg-[#29DE92] px-5 py-2 rounded-md  ${
                activeTab == "Racing Car" ? "bg-[#32A575]" : ""
              }`}
            >
              Police Car
            </button>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
