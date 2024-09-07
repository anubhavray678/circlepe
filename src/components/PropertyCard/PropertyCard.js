import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing the location icon from react-icons
import { useRouter } from "next/navigation";
import Link from "next/link";

const PropertyCard = ({ id, image, name, ratings, address, price }) => {
  const router = useRouter();

  const handleClick = () => {
    const query = new URLSearchParams({
      id,
      image,
      name,
      ratings,
      address,
      price,
    }).toString();
    router.push(`/property/${id}?${query}`);
  };

  return (
    <div
      className="bg-blue-100 p-4 flex items-center mt-3 rounded-3xl w-full cursor-pointer hover:bg-sky-50"
      onClick={handleClick}
    >
      <div className="mr-4">
        <img
          src={image}
          alt={name}
          className="w-36 h-32 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#21435b">{name}</h2>

          <div className="flex items-center">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="ml-2 text-gray-600 text-sm">
              {ratings} Ratings
            </span>
          </div>
          <p className="text-gray-700 flex items-center text-sm">
            <FaMapMarkerAlt className="mr-2" /> {address}
          </p>
        </div>
        <p className="text-gray-600 font-semibold">{price}/month</p>
      </div>
    </div>
  );
};

export default PropertyCard;
