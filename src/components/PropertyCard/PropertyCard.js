import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PropertyCard = ({
  id,
  image,
  name,
  ratings,
  address,
  price,
  isHoveredInitially = false,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(isHoveredInitially);

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
      className={`bg-blue-100 p-4 flex items-center mt-3 rounded-3xl w-full cursor-pointer relative transition-colors duration-300 ${
        isHovered ? "bg-sky-50" : "bg-blue-100"
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !isHoveredInitially && setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative mr-4">
        {/* Heart Icon at the top-left corner of the image */}
        <div
          className={`absolute top-2 left-2 ${
            isHovered ? "bg-green-500" : "bg-white"
          } rounded-full p-1 shadow-md transition-colors duration-300`}
        >
          {isHovered ? (
            <FavoriteIcon className="text-white" />
          ) : (
            <FavoriteBorderIcon className="text-[#21435b]" />
          )}
        </div>

        {/* Property Image */}
        <img
          src={image}
          alt={name}
          className="w-36 h-32 object-cover rounded-lg"
        />
      </div>

      {/* Property Details */}
      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#21435b]">{name}</h2>

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
