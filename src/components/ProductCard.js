import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  isNew,
  isOnSale,
  discount,
  onAddToCart,
  onAddToWishlist,
}) => {
  const discountedPrice = isOnSale ? price - (price * discount) / 100 : price;

  return (
    <Link to={`/product/${id}`} className="group block cursor-pointer">
      <Card className="relative overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {isNew && <Badge>New</Badge>}
            {isOnSale && <Badge variant="destructive">{discount}% Off</Badge>}
          </div>
          {/* Overlay hành động */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={(e) => e.preventDefault()} // Ngăn Link kích hoạt khi nhấn nút
          >
            <div className="flex gap-2">
              <Button size="icon" onClick={() => onAddToCart(id)}>
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={() => onAddToWishlist(id)}>
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-1 text-sm text-gray-500">{category}</div>
          <h3 className="mb-2 text-base font-medium text-gray-900 line-clamp-1">{name}</h3>
          <div className="flex items-center">
            {isOnSale ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-blue-500">${discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-semibold text-blue-500">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;