import React from "react";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = ({ cartItems }) => {
  const handleSubmit = (values) => {
    console.log("Đặt hàng:", values);
    // Xử lý logic đặt hàng
  };

  return (
    <CheckoutForm cartItems={cartItems} onSubmit={handleSubmit} />
  );
};

export default Checkout;