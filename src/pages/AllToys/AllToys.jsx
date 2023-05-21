import React from "react";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToys = () => {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">All Toys</h3>
      <div class=" flex mt-3 px-4 sm:px-0">
        <div class="block relative">
          <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <FaSearch />
          </span>
          <input
            placeholder="Search"
            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-md overflow-hidden">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Seller Name
                </th>
                <th class="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Toy Name
                </th>
                <th class="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Subcategory
                </th>
                <th class="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th class="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Available Quantity
                </th>
                <th class="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-4 border-b text-sm">
                  <p>Abu Motaleb</p>
                </td>
                <td class="px-4 py-4 border-b text-sm">
                  <p>American Fire Tractor</p>
                </td>
                <td class="px-4 py-4 border-b text-sm">
                  <p>Fire Tractor</p>
                </td>
                <td class="px-4 py-4 border-b text-sm">
                  <p>
                    <span>500 </span>TK
                  </p>
                </td>
                <td class="px-4 py-4 border-b text-sm">
                  <p>50</p>
                </td>
                <td class="px-4 py-4 border-b text-sm">
                  <Link className="text-white bg-[#29DE92] hover:bg-[#32A575] px-3 py-2 rounded-sm">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
