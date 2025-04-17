import React from "react";
import WishlistItem from "../components/WishlistItem";

const UserProfile = ({ wishlist, onRemoveFromWishlist }) => {
  // Dữ liệu giả lập cho người dùng
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
  };

  // Dữ liệu giả lập cho lịch sử đơn hàng
  const orderHistory = [
    {
      id: "ORDER001",
      date: "2025-04-10",
      total: 109.97,
      status: "Đã giao",
      items: [
        { name: "Classic White T-Shirt", quantity: 2, price: 29.99 },
        { name: "Denim Jacket", quantity: 1, price: 79.99 },
      ],
    },
    {
      id: "ORDER002",
      date: "2025-04-05",
      total: 49.99,
      status: "Đang xử lý",
      items: [{ name: "Summer Dress", quantity: 1, price: 49.99 }],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">👤 Hồ sơ của bạn</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Thông tin cá nhân */}
        <div className="bg-white p-8 shadow-lg rounded-xl border col-span-1">
          <h2 className="text-xl font-semibold mb-6">🧑 Thông tin cá nhân</h2>
          <div className="space-y-4">
            <div>
              <span className="block text-sm font-medium text-gray-700">Họ và tên</span>
              <p className="text-gray-900">{user.name}</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">Email</span>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">Số điện thoại</span>
              <p className="text-gray-900">{user.phone}</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">Địa chỉ</span>
              <p className="text-gray-900">{user.address}</p>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Chỉnh sửa thông tin
            </button>
          </div>
        </div>

        {/* Lịch sử đơn hàng và danh sách yêu thích */}
        <div className="col-span-1 lg:col-span-2 space-y-10">
          {/* Lịch sử đơn hàng */}
          <div className="bg-white p-8 shadow-lg rounded-xl border">
            <h2 className="text-xl font-semibold mb-6">📦 Lịch sử đơn hàng</h2>
            {orderHistory.length === 0 ? (
              <p className="text-gray-500 italic">Bạn chưa có đơn hàng nào.</p>
            ) : (
              <div className="space-y-6">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Mã đơn: {order.id}</span>
                      <span className="text-gray-600">{order.date}</span>
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4">
                      <span className="font-medium">Tổng cộng</span>
                      <span className="font-bold">${order.total.toFixed(2)}</span>
                    </div>
                    <div className="mt-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm ${
                          order.status === "Đã giao"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Danh sách yêu thích */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-xl border">
            <h2 className="text-xl font-semibold mb-6">❤️ Danh sách yêu thích</h2>
            {wishlist.length === 0 ? (
              <p className="text-gray-500 italic">Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
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
        </div>
      </div>
    </div>
  );
};

export default UserProfile;