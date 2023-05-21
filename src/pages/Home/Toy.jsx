import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Toy = ({ toy }) => {
  const { _id, toyName, photoUrl, price, rating } = toy;
  return (
    <div className="bg-[#F5F5F5] rounded-lg px-5 pt-5 pb-3">
      <div>
        <img src={photoUrl} className="rounded-md" alt="" />
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">{toyName}</h2>
        <Rating
          placeholderRating={rating}
          emptySymbol={<FaRegStar></FaRegStar>}
          readonly
          placeholderSymbol={<FaStar className="text-amber-400"></FaStar>}
          fullSymbol={<FaStar></FaStar>}
        ></Rating>
        <p className="text-lg font-bold pb-4">
          <span>{price}</span> TK
        </p>
        <Link
          to={`/view-toy/${_id}`}
          className="w-full block text-center text-white bg-[#29DE92] hover:bg-[#32A575] rounded-md px-7 py-2"
        >
          View Toy
        </Link>
      </div>
    </div>
  );
};

export default Toy;
