import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { sellerName, toyName, subcategory, price, quantity } = toy;

  return (
    <tr>
      <td className="px-4 py-4 border-b text-sm">
        <p>{sellerName}</p>
      </td>
      <td className="px-4 py-4 border-b text-sm">
        <p>{toyName}</p>
      </td>
      <td className="px-4 py-4 border-b text-sm">
        <p>{subcategory}</p>
      </td>
      <td className="px-4 py-4 border-b text-sm">
        <p>
          <span>{price} </span>TK
        </p>
      </td>
      <td className="px-4 py-4 border-b text-sm">
        <p>{quantity}</p>
      </td>
      <td className="px-4 py-4 border-b text-sm">
        <Link className="text-white bg-[#29DE92] hover:bg-[#32A575] px-3 py-2 rounded-sm">
          View
        </Link>
        <Link className="text-white bg-[#1a1aff] hover:bg-[#0000cc] px-3 py-2 rounded-sm mx-1">
          Edit
        </Link>
        <button className="text-white bg-[#FF0000] hover:bg-[#A30000] px-3 py-2 rounded-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Toy;
