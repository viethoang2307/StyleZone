import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Sản phẩm liên quan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;