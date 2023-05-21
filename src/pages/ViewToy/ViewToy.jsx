import React, { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ViewToy = () => {
  useEffect(() => {
    document.title = "ToyZone | View Toy";
  }, []);

  const toy = useLoaderData();
  const {
    _id,
    sellerName,
    sellerEmail,
    toyName,
    subcategory,
    price,
    rating,
    quantity,
    photoUrl,
    description,
  } = toy;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-0 py-8 md:py-16">
      <div>
        <img src={photoUrl} alt="" />
      </div>
      <div>
        <h3 className="text-sm md:text-lg text-[#595959] font-normal">
          Toy Name: <span className="font-semibold">{toyName}</span>
        </h3>
        <h3 className="text-sm md:text-lg text-[#595959] font-normal">
          Seller Name: <span className="font-semibold">{sellerName}</span>
        </h3>
        <h3 className="text-sm md:text-lg text-[#595959] font-normal">
          Seller Email: <span className="font-semibold">{sellerEmail}</span>
        </h3>
        <h3 className="text-sm md:text-lg text-[#595959] font-normal">
          Price: <span className="text-lg font-bold">{price} TK</span>
        </h3>
        <div className="flex items-center">
          <h3 className="text-sm md:text-lg text-[#595959] font-normal pr-1">
            Rating:
          </h3>
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-amber-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <h3 className="ps-1">({rating})</h3>
        </div>
        <h3 className="text-sm md:text-lg text-[#595959] font-normal">
          Available Quantity:
          <span className="font-semibold ps-1">{quantity}</span>
        </h3>
        <h3 className="text-sm md:text-lg text-[#595959] font-normal">
          Description:
          <span className="font-normal ps-1">{description}</span>
        </h3>
      </div>
    </div>
  );
};

export default ViewToy;
