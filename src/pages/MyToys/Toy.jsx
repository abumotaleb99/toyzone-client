import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { sellerName, toyName, subcategory, price, quantity } = toy;

  return (
    <tr>
      <td class="px-4 py-4 border-b text-sm">
        <p>{sellerName}</p>
      </td>
      <td class="px-4 py-4 border-b text-sm">
        <p>{toyName}</p>
      </td>
      <td class="px-4 py-4 border-b text-sm">
        <p>{subcategory}</p>
      </td>
      <td class="px-4 py-4 border-b text-sm">
        <p>
          <span>{price} </span>TK
        </p>
      </td>
      <td class="px-4 py-4 border-b text-sm">
        <p>{quantity}</p>
      </td>
      <td class="px-4 py-4 border-b text-sm">
        <Link className="text-white bg-[#29DE92] hover:bg-[#32A575] px-3 py-2 rounded-sm">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default Toy;
