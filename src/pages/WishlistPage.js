import React from "react";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = ({ wishlist, onRemoveFromWishlist }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">❤️ Danh sách yêu thích</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500 italic text-center">Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={onRemoveFromWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;