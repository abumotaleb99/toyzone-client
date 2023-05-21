import React, { useEffect, useState } from "react";
import FeaturedToy from "./FeaturedToy";

const FeaturedToys = () => {
  const [featuredToys, setFeaturedToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-abumotaleb99.vercel.app/all-toys`
    )
      .then((res) => res.json())
      .then((result) => {
        setFeaturedToys(result);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 pb-8 md:pb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-center pb-8">
        Featured Toys
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {featuredToys.slice(0, 8).map((featuredToy) => (
          <FeaturedToy
            key={featuredToy._id}
            featuredToy={featuredToy}
          ></FeaturedToy>
        ))}
      </div>
    </div>
  );
};

export default FeaturedToys;
