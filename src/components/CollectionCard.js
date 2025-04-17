import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ name, image }) => {
  return (
    <Link to={`/collection/${name.toLowerCase().replace(/\s+/g, "-")}`} className="group block">
      <div className="relative h-64 overflow-hidden rounded-xl border border-gray-200 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center transition-opacity duration-300 group-hover:from-black/70">
          <h3 className="text-white text-2xl font-semibold tracking-wide uppercase transition-transform duration-300 group-hover:scale-105">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;