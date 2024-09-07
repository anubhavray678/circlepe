"use client";
import PriceCard from "@/components/PriceCard/PriceCard";
import { useParams, useSearchParams } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
const PropertyDetails = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const image = searchParams.get("image");
  const name = searchParams.get("name");
  const ratings = searchParams.get("ratings");
  const address = searchParams.get("address");
  const price = searchParams.get("price");

  return (
    <>
      <div className="pl-10 pr-10 mt-20">
        <div className="bg-blue-100 p-4 flex items-center mt-3 rounded-3xl w-full cursor-pointer hover:bg-sky-50">
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
            <p className="text-gray-600 bg-white rounded-full p-2 font-semibold">
              {price}/month
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-52">
          <PriceCard price={price} />
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
