import React, { useState, useEffect } from "react";

const banners = [
  { id: 1, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&q=80", alt: "Summer Collection" },
  { id: 2, image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1200&q=80", alt: "Winter Sale" },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <img
          key={banner.id}
          src={banner.image}
          alt={banner.alt}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 absolute top-0"
          }`}
        />
      ))}
    </div>
  );
};

export default BannerSlider;