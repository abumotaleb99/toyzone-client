import React, { useEffect } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  useEffect(() => {
    document.title = "ToyZone | Update Toy";
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

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toy_name.value;
    const sellerName = form.seller_name.value;
    const sellerEmail = form.seller_email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photoUrl = form.photo_url.value;
    const description = form.description.value;
    const toy = {
      toyName,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity,
      photoUrl,
      description,
    };
    // console.log(toyName, sellerName, sellerEmail, description);
    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="px-5 py-8 md:py-16">
      <div className="w-full md:max-w-4xl m-auto border rounded-md px-6 py-12">
        <h1 className="text-3xl font-bold">Add A Toy</h1>
        <form onSubmit={handleUpdateToy} className="mt-4">
          <div className="mb-2 md:grid grid-cols-2 gap-5">
            <div>
              <label className=" text-base font-semibold">Toy Name</label>
              <input
                type="text"
                name="toy_name"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={toyName}
                required
              />
            </div>
            <div>
              <label className=" text-base font-semibold">Seller Name</label>
              <input
                type="text"
                name="seller_name"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={sellerName}
                required
              />
            </div>
          </div>
          <div className="mb-2 md:grid grid-cols-2 gap-5">
            <div>
              <label className=" text-base font-semibold">Seller Email</label>
              <input
                type="email"
                name="seller_email"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={sellerEmail}
                required
              />
            </div>
            <div>
              <label className=" text-base font-semibold">Subcategory</label>
              <input
                type="text"
                name="subcategory"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={subcategory}
                required
              />
            </div>
          </div>
          <div className="mb-2 md:grid grid-cols-3 gap-5">
            <div>
              <label className=" text-base font-semibold">Price</label>
              <input
                type="number"
                name="price"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={price}
                required
              />
            </div>
            <div>
              <label className=" text-base font-semibold">Rating</label>
              <input
                type="text"
                name="rating"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={rating}
                required
              />
            </div>
            <div>
              <label className=" text-base font-semibold">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={quantity}
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label className=" text-base font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo_url"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              defaultValue={photoUrl}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Description</label>
            <textarea
              name="description"
              required
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
              defaultValue={description}
            ></textarea>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              className="w-full text-base text-white bg-[#29DE92] hover:bg-[#32A575] tracking-wide rounded-md cursor-pointer  px-4 py-2"
              value="Add A Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
