import React from "react";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, onUpdateQuantity, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 5.0;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống. <Link to="/" className="text-blue-500 underline">Tiếp tục mua sắm</Link></p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
          <div className="text-right">
            <p className="mb-2">Tạm tính: ${total.toFixed(2)}</p>
            <p className="mb-4">Phí vận chuyển: ${shippingFee.toFixed(2)}</p>
            <p className="text-xl font-bold mb-4">Tổng cộng: ${(total + shippingFee).toFixed(2)}</p>
            <Link to="/checkout">
              <Button>Thanh toán</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;