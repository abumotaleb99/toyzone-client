import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Toy from "./Toy";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">My Toys</h3>
      <div className="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-md overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Seller Name
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Toy Name
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Subcategory
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Available Quantity
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
