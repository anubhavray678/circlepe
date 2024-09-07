// components/Property.js
"use client";
import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const Property = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MzYyNzY2NjA&ixlib=rb-1.2.1&q=80&w=400",
      name: "Beautiful Apartment",
      ratings: 4,
      address: "123 Main St, Anytown, USA",
      price: "1200",
      isHoveredInitially: false,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbmRvfGVufDB8fHx8MTYzNjI3NjY2MA&ixlib=rb-1.2.1&q=80&w=400",
      name: "Modern Condo",
      ratings: 5,
      address: "456 Elm St, Othertown, USA",
      price: "1500",
      isHoveredInitially: true,
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      name: "Cozy Cottage",
      ratings: 3,
      address: "789 Oak St, Sometown, USA",
      price: "900",
      isHoveredInitially: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MzYyNzY2NjA&ixlib=rb-1.2.1&q=80&w=400",
      name: "Spacious Villa",
      ratings: 5,
      address: "101 Pine St, Anycity, USA",
      price: "2000",
      isHoveredInitially: false,
    },
  ];

  return (
    <div className="p-8 w-full">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          id={property.id}
          image={property.image}
          name={property.name}
          ratings={property.ratings}
          address={property.address}
          price={property.price}
          isHoveredInitially={property.isHoveredInitially}
        />
      ))}
    </div>
  );
};

export default Property;
