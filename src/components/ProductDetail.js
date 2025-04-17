import React, { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import Button from "./Button";
import { Rate } from "antd";

const ProductDetail = ({ product, onAddToCart, onAddToWishlist }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [zoomImage, setZoomImage] = useState(product.image);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "White", "Blue"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={zoomImage}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg mb-4"
          />
          <div className="flex gap-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name}-${index}`}
                className="w-20 h-20 object-cover rounded cursor-pointer"
                onClick={() => setZoomImage(img)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold text-blue-500">${product.price.toFixed(2)}</span>
            {product.isOnSale && (
              <span className="text-sm text-gray-500 line-through ml-4">${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "secondary"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Color</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "secondary"}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Mô tả</h3>
            <p>{product.description || "Chất liệu cao cấp, thiết kế hiện đại."}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Đánh giá</h3>
            <Rate allowHalf defaultValue={4.5} disabled />
            <span className="ml-2">(50 đánh giá)</span>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => onAddToCart(product.id)}>Thêm vào giỏ hàng</Button>
            <Button variant="secondary" onClick={() => onAddToWishlist(product.id)}>
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;