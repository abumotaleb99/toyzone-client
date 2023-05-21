import React from "react";
import img1 from "../../assets/gallery/gallery1.jpg";
import img2 from "../../assets/gallery/gallery2.jpg";
import img3 from "../../assets/gallery/gallery3.jpg";
import img4 from "../../assets/gallery/gallery4.jpg";
import img5 from "../../assets/gallery/gallery5.jpg";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 py-10 md:py-24">
      <h3 className="text-2xl md:text-3xl font-bold text-center pb-8 md:pb-12">
        Toy Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full">
          <img src={img1} className="w-full h-full" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <img src={img2} className="w-full h-full" alt="" />
          <img src={img3} className="w-full h-full" alt="" />
          <img src={img4} className="w-full h-full" alt="" />
          <img src={img5} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
