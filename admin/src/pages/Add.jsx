import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Add = () => {
  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(false);
  const [image3, setimage3] = useState(false);
  const [image4, setimage4] = useState(false);

  const [name, setname] = useState("");
  const [features, setfeatures] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("Smartwatch");
  const [bestSeller, setbestSeller] = useState(false);
  const [colors, setcolors] = useState([]);
  
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const token = localStorage.getItem("token"); // Retrieve token from localStorage or another source

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // Create FormData for API submission
      const formData = new FormData();

      // Append form fields
      formData.append("name", name);
      formData.append("features", features);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("colors", JSON.stringify(colors)); // Convert array to string
      formData.append("bestseller", bestSeller);

      // Append images if they exist
      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      // Send to API
      const response = await axios.post(`${API_URL}/api/product/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `${token}`, // Correctly pass the token
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }

      // Reset the form
      setname("");
      setfeatures("");
      setdescription("");
      setprice("");
      setcategory("Smartwatch");
      setbestSeller(false);
      setcolors([]);
      setimage1(false);
      setimage2(false);
      setimage3(false);
      setimage4(false);
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[setimage1, setimage2, setimage3, setimage4].map((setImage, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className="w-20"
                src={
                  ![image1, image2, image3, image4][index]
                    ? assets.upload_area
                    : URL.createObjectURL([image1, image2, image3, image4][index])
                }
                alt=""
                onLoad={() =>
                  URL.revokeObjectURL([image1, image2, image3, image4][index])
                }
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Other Fields */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Features</p>
        <textarea
          onChange={(e) => setfeatures(e.target.value)}
          value={features}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write Product Features"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write Product Description"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Smartwatch">SmartWatch</option>
            <option value="Earbuds">Earbuds</option>
            <option value="Headphones">Headphones</option>
            <option value="Drones">Drones</option>
            <option value="Accessories">Accessories</option>
            <option value="Combo">Accessories</option>
          </select>
        </div>
        <div>
          <p className="mb-2 ">Product Price</p>
          <input
            onChange={(e) => setprice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
            required
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Colors</p>
        <div className="flex gap-3">
          {["Black", "Grey", "Gold"].map((color) => (
            <div
              key={color}
              onClick={() =>
                setcolors((prev) =>
                  prev.includes(color)
                    ? prev.filter((item) => item !== color)
                    : [...prev, color]
                )
              }
            >
              <p
                className={`${
                  colors.includes(color) ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setbestSeller((prev) => !prev)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white hover:bg-gray-800 transition"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
